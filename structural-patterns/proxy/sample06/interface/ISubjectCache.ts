export interface ISubjectCache {
  request(resource: string): Promise<string>;
}
