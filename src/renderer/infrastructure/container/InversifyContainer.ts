import { Container } from 'inversify';
import 'reflect-metadata';

import TYPES from '@/renderer/infrastructure/container/Types';
import { AxiosRestClient } from '@/renderer/infrastructure/rest/AxiosRestClient';
import { GithubRestClient } from '@/renderer/infrastructure/rest/GithubRestClient';
import { GithubService } from '@/renderer/infrastructure/services/github/GithubService';

const container = new Container();
container.bind<GithubService>(TYPES.GithubService).to(GithubService);
container.bind<GithubRestClient>(TYPES.GithubRestClient).to(GithubRestClient);
container.bind<AxiosRestClient>(TYPES.AxiosRestClient).to(AxiosRestClient);

export default container;
