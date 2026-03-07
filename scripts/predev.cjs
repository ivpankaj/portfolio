const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const repoPath = process.cwd();
const devDir = path.join(repoPath, ".next-dev");

fs.rmSync(devDir, { recursive: true, force: true });

const killStaleProcesses = () => {
  try {
    if (process.platform === "win32") {
      const repoPathForLike = repoPath.replace(/'/g, "''");
      const script = `
$repo = '${repoPathForLike}'
$processes = Get-CimInstance Win32_Process | Where-Object {
  $_.CommandLine -and (
    $_.CommandLine -like "*$repo*next*dev*" -or
    $_.CommandLine -like "*$repo*start-server.js*" -or
    $_.CommandLine -like "*$repo*.next-dev*"
  )
}
foreach ($process in $processes) {
  if ($process.ProcessId -ne $PID) {
    Stop-Process -Id $process.ProcessId -Force -ErrorAction SilentlyContinue
  }
}
`;

      execFileSync(
        "powershell.exe",
        ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", script],
        { stdio: "ignore" },
      );

      return;
    }

    execFileSync(
      "pkill",
      [
        "-f",
        `${repoPath}.*next(.*)dev|${repoPath}.*start-server.js|${repoPath}.*\\.next-dev`,
      ],
      { stdio: "ignore" },
    );
  } catch {
    // No stale process found or process tool unavailable.
  }
};

killStaleProcesses();
