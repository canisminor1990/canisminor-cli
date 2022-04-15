import { camelCase, kebabCase } from 'lodash';
import { temp } from './template';
import * as React from 'react';

interface ShieldTemplate {
  svg: string;
  url: string;
}

interface ShieldItem {
  name: string;
  svg: string;
  url: string;
}

interface ShieldMD {
  shield: string;
  link: string;
}

export const shield: { [name: string]: ShieldTemplate } = {
  npm: {
    svg: `https://img.shields.io/npm/v/${temp.package}?style=flat&logo=npm`,
    url: `https://www.npmjs.com/package/${temp.package}`,
  },
  release: {
    svg: `https://img.shields.io/github/v/release/${temp.repo}?style=flat&sort=semver&logo=github`,
    url: `https://github.com/${temp.repo}/releases`,
  },
  releaseDate: {
    svg: `https://img.shields.io/github/release-date/${temp.repo}?style=flat`,
    url: `https://github.com/${temp.repo}/releases`,
  },
  ciTest: {
    svg: `https://github.com/${temp.repo}/workflows/Test/badge.svg`,
    url: `https://github.com/${temp.repo}/actions?query=Test`,
  },
  ciRelease: {
    svg: `https://github.com/${temp.repo}/workflows/Release/badge.svg`,
    url: `https://github.com/${temp.repo}/actions?query=Release`,
  },
  contributors: {
    svg: `https://img.shields.io/github/contributors/${temp.repo}.svg?style=flat`,
    url: `https://github.com/${temp.repo}/graphs/contributors`,
  },
  forks: {
    svg: `https://img.shields.io/github/forks/${temp.repo}.svg?style=flat`,
    url: `https://github.com/${temp.repo}/network/members`,
  },
  stargazers: {
    svg: `https://img.shields.io/github/stars/${temp.repo}.svg?style=flat`,
    url: `https://github.com/${temp.repo}/stargazers`,
  },
  issues: {
    svg: `https://img.shields.io/github/issues/${temp.repo}.svg?style=flat`,
    url: `https://img.shields.io/github/issues/${temp.repo}.svg?style=flat`,
  },
  license: {
    svg: `https://img.shields.io/github/license/${temp.repo}.svg?style=flat`,
    url: `https://github.com/${temp.repo}/blob/master/LICENSE`,
  },
};

export const shieldSelections: {
  label: string;
  value: React.Key;
}[] = Object.keys(shield).map((item) => ({
  label: camelCase(item),
  value: item,
}));

const genShieldItem = (shieldItem: ShieldItem): ShieldMD => {
  const name = camelCase(shieldItem.name);
  const shieldName = kebabCase(shieldItem.name + '-shield');
  const urlName = kebabCase(shieldItem.name + '-url');
  const shield = `[![${name}][${shieldName}]][${urlName}]`;
  const shieldLink = `[${shieldName}]: ${shieldItem.svg}`;
  const urlLink = `[${urlName}]: ${shieldItem.url}`;
  return {
    shield,
    link: [`<!-- ${name} -->`, shieldLink, urlLink].join('\n\n'),
  };
};

export const genShield = (
  shields: string[],
): { shields: string; links: string } => {
  const shieldGorup: string[] = [`<!-- SHIELD GROUP -->\n`];
  const linkGroup: string[] = [`<!-- SHIELD LINK GROUP -->\n`];
  shields.forEach((item) => {
    // @ts-ignore
    const data = genShieldItem({ ...shield[item], name: item });
    shieldGorup.push(data.shield);
    linkGroup.push(data.link);
  });
  return {
    shields: shieldGorup.join('\n'),
    links: linkGroup.join('\n'),
  };
};
