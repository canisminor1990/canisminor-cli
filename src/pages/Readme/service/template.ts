import { template } from 'lodash';
import { PATH_PROCESS } from '@/utils/const';
import { resolve } from 'path';
import fs from 'fs-extra';

interface TemplateData {
  package: string;
  repo: string;
  desc: string;
}

interface PackageJSON {
  name: string;
  repository: string | any;
  description: string;
}

export const temp: TemplateData = {
  package: '<%= package %>',
  repo: '<%= repo %>',
  desc: '<%= desc %>',
};

export const genReadme = (templateSource: string) => {
  const pkgPath = resolve(PATH_PROCESS, 'package.json');
  const isExist = fs.existsSync(pkgPath);
  if (!isExist) return;
  // @ts-ignore
  const pkgStr: string = fs.readFileSync(pkgPath);
  const pkgJson: PackageJSON = JSON.parse(pkgStr);
  const templateData: TemplateData = {
    package: pkgJson.name,
    repo: getRepo(
      pkgJson.repository?.url ? pkgJson.repository.url : pkgJson.repository,
    ),
    desc: pkgJson.description,
  };
  const compiled = template(templateSource);
  return compiled(templateData);
};

function getRepo(repository: string) {
  let repo: any = repository.split('github.com/')[1];
  repo = repo.split('.git')[0];
  return repo;
}
