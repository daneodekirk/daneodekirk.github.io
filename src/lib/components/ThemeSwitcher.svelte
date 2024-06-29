<script>
  let theme = 'light'
  let changeTheme = () => {
    theme = theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
  }
</script>

<style>
  @import "theme-toggles/css/simple.min.css";

  .theme-toggle {
    position: fixed;
    bottom: 0;
    left: 10px;
  }
</style>

<!-- Thanks to https://toggles.dev --> 
<label class="theme-toggle" title="Toggle theme">
  <input type="checkbox" onchange={changeTheme} />
  <span class="theme-toggle-sr">Toggle theme</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width="1em"
    height="1em"
    class="theme-toggle__simple"
    fill="currentColor"
    viewBox="0 0 32 32"
  >
    <clipPath id="theme-toggle__simple__cutout">
      <path d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0" />
    </clipPath>
    <g clip-path="url(#theme-toggle__simple__cutout)">
      <circle cx="16" cy="16" r="15" />
    </g>
  </svg>
</label>

