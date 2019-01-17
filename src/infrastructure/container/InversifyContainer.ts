import TYPES from '@/infrastructure/container/Types';
import { AxiosRestClient } from '@/infrastructure/rest/AxiosRestClient';
import { GithubRestClient } from '@/infrastructure/rest/GithubRestClient';
import { GithubService } from '@/infrastructure/services/github/GithubService';
import { Container } from 'inversify';

const container = new Container();
container.bind<GithubService>(TYPES.GithubService).to(GithubService);
container.bind<GithubRestClient>(TYPES.GithubRestClient).to(GithubRestClient);
container.bind<AxiosRestClient>(TYPES.AxiosRestClient).to(AxiosRestClient);

export default container;
