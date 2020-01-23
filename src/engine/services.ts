import Talk from "./services/talk";
import AudioManagers from "./services/audioManagers";
import ConfigManager from "./services/configManager";
import { Utils } from "./services/utils";
import uiEventManager from "./services/uiEventManager";

export default class Services {

    public static config = new ConfigManager(Services.getJSON('./config/config.json'));
    public static audio = new AudioManagers(Services.config.get('audio'));
    public static talk = new Talk();
    public static utils = new Utils();
    public static uiEventManager = new uiEventManager();

    public static getJSON(url:string): any {

        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", url, false);
        rawFile.send();
        if (rawFile.status != 200) {
            console.log('getJSON ERROR')
        } else {
            let json = rawFile.responseText
            return JSON.parse(json);
        }

    }
}