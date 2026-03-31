$exclude = @('node_modules','.angular','.nx','dist','.git','static','graph.html','package-lock.json')

function Get-DirTree {
    param([string]$Path, [string]$Indent = '')
    $entries = @(Get-ChildItem -LiteralPath $Path -Force | Where-Object { $_.Name -notin $exclude })
    for ($i = 0; $i -lt $entries.Count; $i++) {
        $item = $entries[$i]
        $isLast = ($i -eq ($entries.Count - 1))
        $connector = if ($isLast) { '\---' } else { '+---' }
        "$Indent$connector $($item.Name)"
        if ($item.PSIsContainer) {
            $childIndent = if ($isLast) { "$Indent    " } else { "$Indent|   " }
            Get-DirTree -Path $item.FullName -Indent $childIndent
        }
    }
}

"c:\_SELF\agent-monorepo"
Get-DirTree -Path "c:\_SELF\agent-monorepo"
