import { ipcRenderer } from 'electron';

export const TRACK = {
  BootApp: 'boot-app',
  AddGithubToken: 'add-github-token',
};

class Track {
  addGithubToken(): void {
    ipcRenderer.send('track-event', TRACK.AddGithubToken);
  }
}

export const track = new Track();
