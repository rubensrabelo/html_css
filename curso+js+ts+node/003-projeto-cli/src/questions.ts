import { EChoicesBoilerPlates } from "enum/choices-boirplaters.enum";
import path from "path";
import fs from "fs";
import { EErros } from "enum/erros.enum";

export const questions = [
    {
      type: 'list',
      name: 'folderName',
      message: 'Qual o Boirplate eu devo criar?',
      choices: [EChoicesBoilerPlates.NODEJS_TS, EChoicesBoilerPlates.SCSS],
    },
    {
      type: 'input',
      name: 'techName',
      message: 'Qual o nome do novo projeto?',
      validate(folderName: string){
        if(!folderName) return  EErros.ERROR_NULL;
        if(/[^\w\s-]/.test(folderName)) return EErros.ERROR_CARACTERES_ESPECIAIS;
        
        if(
          folderName === "Name" || folderName === "OtherName"
        ) return EErros.ERROR_NOME_IGUAL;
        
        try {
          const dir = path.resolve(folderName);
          fs.accessSync(dir, fs.constants.R_OK);

          return EErros.ERROR_PASTA_JA_EXISTE;
        } catch(error) {
          console.log(error);
        }
        
        return true;
      }
    },
  ];