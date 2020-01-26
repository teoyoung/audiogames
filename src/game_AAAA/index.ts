import IntroSc from "./scenes/introSc";
import Services from "../engine/services";
import loader from "../engine/stage_manager";
import GameSc from "./scenes/gameSc";

loader.loader({
    'Intro': IntroSc,
    'Game': GameSc
});

loader.applyStage('Start');