import IntroSc from "./scenes/introSc";
import Services from "../engine/services";
import StageManager from "../engine/stage_manager";
import GameSc from "./scenes/gameSc";

StageManager.loader({
    'Intro': IntroSc,
    'Game': GameSc
});

StageManager.applyStage('Start');