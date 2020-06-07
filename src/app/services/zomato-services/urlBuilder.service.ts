import Handlebars from 'handlebars';

export const buildUrl = (url: string, pathParams: { [key: string]: string }): string => {
  const template = Handlebars.compile(url);
  const constructedUrl = template(pathParams);
  return constructedUrl;
};
