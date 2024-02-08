<h3>⭕ Basic Command Everyone Should Know</h3> <br />
<ul>
    <li>  <strong>Open REPEL</strong> = Type <strong>node</strong> in cmd </li>
    <li>  <strong>Close REPEL</strong> = Hit two times <strong> ctrl + c </strong> </li>
    <li>  <strong>Run node file</strong> = <strong> node filename.js </strong> </li>
    <li>  <strong>Open Terminal in VS Code</strong> = <strong> ctrl + ` </strong> </li>
    <li>  <strong>Clear Termianl</strong> = Type <string>cls</strong> & then Hit <strong>Enter</strong> button</li>
    <li> <strong>To know about current directory</strong> = Type <strong>dir</strong> </li>
    <li> <strong>Change Directory</strong> = cd filename</li>
</ul>

<h3>⭕ Global Variable</h3> <br />
<ul>
<li>__dirname = Path to current dictory</li>
<li>__filename = filename</li>
<li>require = function to use modules (CommonJS) </li>
<li>module = info about current module</li>
<li>process = info about env where the program is being executed</li>
</ul>

<h3>⭕ Modules</h3> <br />
<p>CommonJS, every file is module (by default) </p>

<p>Modules - Encapsulated code (only share minimum) </p>

<h4>Built-in Modules</h4>

<ul>

<li>os - gives the info of local machine where backend is ruuning</li>

<li>path - gives the info of absoulte path where app is ruuning</li>

<li>fs</li>

<li>http</li>

</ul>

<h3>⭕ NPM - Node Package Manager</h3> <br />
<p>Reference - https://www.npmjs.com/ </p>
<p>Check Version - Type <strong>npm --v</strong> </p>
<p>Run Script - Type <strong>npm run cmd_name</strong> </p>

<h4>▶package.json</h4>
<p>This is a manifest file (stores important info about project/package)</p>

<h5>Creation - Manual</h5>
<p>Create a file with name "package.json" in the root,
create properties etc</p>

<h5>Creation - By NPM</h5>
<ol>
<li><strong>npm init</strong> = ( step by step, press enter to skip)</li>
<li><strong>npm init -y</strong> = ( everything default ) </li>
</ol>

<h4>▶Install Dependency</h4>
<ul>
<li><strong>Local(dependencies)</strong> - Use it only in this particular project <br/> 
<p><strong>npm i/install</strong> package_name = install package & save in <strong>dependencies</strong>  in package.json</p> 
</li>
<li><strong>Local(devDependencies)</strong> - Use it only in this particular project <br/> 
<p><strong>npm i/install</strong> package_name <strong>--save-dev / -D</strong> = install package & save in <strong>devDependencies</strong>  in package.json</p> 
</li>
<li><strong>Global</strong> - Use it in any project <br/>
<p><strong>npm i/install -g </strong>package_name </p>
</li>
</ul>

<h4>▶Uninstall Dependency</h4>
<ol>
<li>By NPM - Type <strong>npm uninstall</strong> package_name </li>
<li>Manual<br/> 
    <p>1. First delete node_modules folder</p>
    <p>2. Second delete package-lock.json file</p>
    <p>3. Third delete that package from package.json manually</p>
</li>
</ol>

<h3>⭕ Event Loop</h3> <br />
<p>The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.</p>

<ol>
<li>Read/Write File Async</li>
<li>setTimeout Function</li>
<li>setInterval Function</li>
<li>NodeJs server</li>
</ol>

<h3>⭕ Events in NodeJs</h3> <br />

<h4>Emitter Event</h4>

<p>Module Required : events </p>
<p>This module returns a class, for using we need to create object of the class</p>

<h5>Method in this class includes followig:</h5>

<ol>
<li>on - listen for an event</li>
<li>emit - emit an event</li>
</ol>

<p>Note : Always register/listen first before emit</p>

<h3>⭕ Streams </h3> <br />




