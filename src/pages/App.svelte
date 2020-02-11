<script>  
	import { tweened } from 'svelte/motion';
  import ProgressCircle from "../index.svelte";

  let value1 = 50;
  let value2 = 50;
  let value3 = 50;
  let value4 = tweened(50, { duration: 400 });

  $: progressColor = $value4 < 25 ? '#EF476F' : $value4 > 75 ? '#06D6A0' : '#FFD166';
  $: progressFillColor = $value4 < 25 ? '#F489A3' : $value4 > 75 ? '#60E4C2' : '#FFE5AB';
</script>

<style>
:root {
    --primary: #CC3363;
}

:global(*) {
    box-sizing: border-box;
    color: inherit;
    font-family: 'Gelasio', serif;
    margin: 0;
    padding: 0;
}

:global(body) {
    height: 100vh;
}

header {
    background-color: var(--primary);
    color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
}
    header > h1 {
        flex-grow: 999;
        font-size: 1.25rem;
        font-weight: 500;
    }

main {
    padding: 1rem 2rem;
}

h2,
p {
    display: block;
    margin: 0 1rem;
}

.samples {
  display: grid;
  grid-auto-rows: 100px;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, 100px);
  margin: 1rem;
}

label {
  padding: 1rem 0rem 1rem 0
}

label > span {
  font-weight: 500;
}

label > input {
  width: 100%;
}

pre {
    background: #f4f4f4;
    border: 1px solid #ddd;
    border-left: 3px solid var(--primary);
    color: #666;
    display: block;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin: 1rem;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    page-break-inside: avoid;
    word-wrap: break-word;
}

hr {
  border-color: var(--primary);
  margin: 1rem 0;
}

.sample-2 span,
.sample-2b span,
.sample-2c span {
    font-size: 1.25rem;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
}
.sample-2b span { font-size: 1.75rem; }
.sample-2c span:first-child { 
  border-bottom: 1px solid black;
  font-size: 2rem;
  text-align: center;
  transform: translate(-50%, -75%);
  width: 3ch;
}
.sample-2c span:last-child {
  transform: translate(-50%, 25%);
}

.sample-3a {
  --progress-color: var(--primary);
}
.sample-3b {
  --progress-color: #90D7FF;
  --progress-trackcolor: #BFD0E0;
  --progress-fill: #C9F9FF;
}
.sample-3c {
  --progress-trackcolor: transparent;
}
.sample-4a span,
.sample-4b span,
.sample-4c span {
    left: 50%;
    position: absolute;
    top: 50%;
}
.sample-4a span:first-child { 
  border-bottom: 1px solid black;
  font-size: 2rem;
  text-align: center;
  transform: translate(-50%, -75%);
  width: 3ch;
}
.sample-4a span:last-child {
  color: #666;
  font-size: 0.75rem;
  transform: translate(-50%, 50%);
}
.sample-4b span,
.sample-4c span {
  font-size: 2rem;
  transform: translate(-50%, -50%);
}
.sample-4c {
  --progress-trackcolor: transparent;
  --progress-width: 3px;
}
</style>

<header>
  <h1>Svelte Progress Circle Image</h1>
  <a href="https://github.com/stephane-vanraes/svelte-progresscircle">Github</a>
</header>

<main>
  <h2>Basic Usage</h2>  
  <pre>&lt;ProgressCircle max="100" value="&#123;value1}" /></pre>
  <div class="samples">
    <label>
      <span>Change Value</span>
      <input type="range" min="0" max="100" value="{value1}" on:input="{ev => value1 = ev.currentTarget.value}">
    </label>
    <ProgressCircle max="100" value="{value1}" />
  </div>
  <hr />
  <h2>Slotted Content</h2>  
  <pre>
&lt;!-- Actual styling is done with CSS -->
&lt;ProgressCircle max="100" value="&#123;value2">
  &lt;span>&#123;value2}/100&lt;/span>
&lt;ProgressCircle>
&lt;ProgressCircle max="100" value="&#123;value2}">
  &lt;span>&#123;value2}%&lt;/span>
&lt;/ProgressCircle>
&lt;ProgressCircle max="100" value="&#123;value2}">
  &lt;span>&#123;value2}&lt;/span>
  &lt;span>100&lt;/span>
&lt;/ProgressCircle>
  </pre>
  <div class="samples">
    <label>
      <span>Change Value</span>
      <input type="range" min="0" max="100" value="{value2}" on:input="{ev => value2 = ev.currentTarget.value}">
    </label>
    <div class="sample-2"><ProgressCircle max="100" value="{value2}"><span>{value2}/100</span></ProgressCircle></div>
    <div class="sample-2b"><ProgressCircle max="100" value="{value2}"><span>{value2}%</span></ProgressCircle></div>
    <div class="sample-2c"><ProgressCircle max="100" value="{value2}"><span>{value2}</span><span>100</span></ProgressCircle></div>
  </div>
  <hr />
  <h2>Overriding Styles Usage</h2>  
  <pre>
.sample-3a &#123;
  --progress-color: var(--primary);
}
.sample-3b &#123;
  --progress-color: #90D7FF;
  --progress-trackcolor: #BFD0E0;
  --progress-fill: #C9F9FF;
}
.sample-3c &#123;
  --progress-trackcolor: transparent;
}
  </pre>
  <div class="samples">
    <label>
      <span>Change Value</span>
      <input type="range" min="0" max="100" value="{value3}" on:input="{ev => value3 = ev.currentTarget.value}">
    </label>
    <div class="sample-3a"><ProgressCircle max="100" value="{value3}" /></div>
    <div class="sample-3b"><ProgressCircle max="100" value="{value3}" /></div>
    <div class="sample-3c"><ProgressCircle max="100" value="{value3}" /></div>
  </div>
  <hr />
  <h2>Advanced Examples</h2>  
  <pre>
let value4 = tweened(50, &#123; duration: 400});

$: progressColor = $value4 &lt; 25 ? '#EF476F' : $value4 > 75 ? '#06D6A0' : '#FFD166';
&lt;div style="--progress-color: &#123;progressColor}">...&lt;/div>


$: progressFillColor = $value4 &lt; 25 ? '#F489A3' : $value4 > 75 ? '#60E4C2' : '#FFE5AB';
&lt;div class="sample-4c" style="--progress-color: &#123;progressColor}; --progress-fill: &#23;progressFillColor}">
.sample-4c &lt;
  --progress-trackcolor: transparent;
  --progress-width: 3px;
}
  </pre>
  <div class="samples">
    <label>
      <span>Change Value</span>
      <input type="range" min="0" max="100" value="{$value4}" on:input="{ev => value4.update(v => parseInt(ev.target.value))}">
    </label>
    <div class="sample-4a">
      <ProgressCircle max="100" value="{$value4}">
        <span>{Math.floor($value4)}</span>
        <span>tweened</span>
      </ProgressCircle>
    </div>
    <div class="sample-4b" style="--progress-color: {progressColor}">
      <ProgressCircle max="100" value="{$value4}">
        <span>{Math.floor($value4)}</span>
      </ProgressCircle>
    </div>
  <div class="sample-4c" style="--progress-color: {progressColor}; --progress-fill: {progressFillColor}">
      <ProgressCircle max="100" value="{$value4}">
        <span>{Math.floor($value4)}</span>
      </ProgressCircle>
    </div>
  </div>
</main>
