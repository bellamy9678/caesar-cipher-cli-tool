# Caesar cipher CLI tool

CLI tool accepts 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action, must be 'encode' or 'decode'

**Usage example:**
1. Download repo
2. Install npm package ```npm install```
3. Run next one of the commands:

```
node index.js -a encode -s 7 -i data/input -o data/output
```

> input
> `This is secret. Message about "_" symbol! И русский текст.`

> output
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs! И русский текст.`

or only

```
node index.js --action encode --shift 7
```

and then enter in console. Press CTRL + C for exit.
