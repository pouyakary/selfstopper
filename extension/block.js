
//
// ─── BLOCK WEBSITE ──────────────────────────────────────────────────────────────
//

document.body.innerHTML = (`
    <style>
      @media (prefers-color-scheme: light) {
        body {
          background-color: var(--arc-palette-minContrastColor) !important;
          color:            var(--arc-palette-maxContrastColor) !important;
        }
      }

      @media (prefers-color-scheme: dark) {
        body {
          background-color: var(--arc-palette-backgroundExtra)      !important;
          color:            var(--arc-palette-foregroundSecondary)  !important;
        }
      }
    </style>
    <div style="padding-top: calc(40vh - 20pt);">
        <center>
            <div style="font-size: 70pt;">🌻</div>
            <div style="font-family: Futura; font-size: 20pt;">Website Blocked</div>
        </center>
    </div>
`)

document.head.innerHTML = (`
    <title>Woops!</title>
`)

// ────────────────────────────────────────────────────────────────────────────────
