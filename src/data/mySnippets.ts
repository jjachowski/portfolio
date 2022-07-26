export const snippets: string = `"Typescript React Function Component": {
	"prefix": "rh",
	"body": [
		"import React from 'react'",
		"",
		"type \${TM_FILENAME_BASE/(.)/\${1:/capitalize}/}Props = {}",
		"",
		"export const \${TM_FILENAME_BASE/(.)/\${1:/capitalize}/}: React.FC<\${TM_FILENAME_BASE/(.)/\${1:/capitalize}/}Props> = () => {",
		"\treturn <>hello</>;",
		"}"
	],
	"description": "Typescript React Function Component"
},
"Console log current value": {
	"prefix": "log",
	"body": [
		"console.log('\${1}: ', \${1})",
	],
	"description": "Console log passed value"
},
"EsLint Console log current value": {
	"prefix": "eslog",
	"body": [
		"// eslint-disable-next-line no-console",
		"console.log('\${1}: ', \${1})",
	],
	"description": "Console log passed value and add es lint comment"
},
"Use state": {
	"prefix": "state",
	"body": [
		"const [\${1}, set\${1/(.)/\${1:/capitalize}/}] = useState();",
	],
	"description": "useState for given name"
},
`;
