https://www.youtube.com/watch?v=kF0TprhN1vg

npx create-react-app cm-react-alias-demo --template typescript

1. add packages 
yarn add @craco/craco

2. create craco.config.js

        const path = require('path')

        module.exports = {
        webpack: {
            alias: {
            '@': path.resolve(__dirname, 'src')
            }
        }
        }


3. revise tsconfig.json

"baseUrl": "src",
    "paths": {
      "@/*": ["*"],
      "@/components/*": ["components/*"],
      "@/features/*": ["features/*"],
      "@/hooks/*": ["hooks/*"],
      "@/types/*": ["types/*"],
      "@/utils/*": ["utils/*"]
    }

4. update package.json

  "scripts": {
      "start": "craco start",
      "build": "craco build",
      "test": "craco test",
      "eject": "craco eject"
    },

4. stop and start again

5. everytime you need to add more alias, you have to add in paths: {...}    