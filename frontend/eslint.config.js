import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
// 1. Importa os pacotes do Prettier
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    // 2. Adiciona o plugin do Prettier
    plugins: {
      prettier: eslintPluginPrettier,
    },
    // 3. Ativa a regra para apontar erros de formatação
    rules: {
      'prettier/prettier': 'error',
    },
  },
  // 4. Aplica a configuração que desativa os conflitos no fim do array
  eslintConfigPrettier,
])