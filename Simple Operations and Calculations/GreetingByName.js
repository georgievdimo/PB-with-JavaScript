//Напишете програма, която изважда от аргумента input име на човек и отпечатва &quot;Hello, &lt;name&gt;!&quot;, където &lt;name&gt; е въведеното име от конзолата.

function solve(input) {
    let name = input.shift();
    console.log(`Hello, ${name}!`);
}
