# auto_commit.ps1

# Navigate to the project directory
Set-Location "L:\Woxro\travel_new"

# Check for changes
$status = git status --porcelain

if ($status) {
    # Stage all changes
    git add .

    # Create a commit message with timestamp
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    git commit -m "Auto-commit on $timestamp"

    # Push to GitHub
    git push origin main
}
