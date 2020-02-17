import Scene from "../../engine/scene";
import Entity, {IEntity} from "../../engine/ecs/ecs_entity";
import ISystem from '../../engine/ecs/i_system';
import PositionComp from "../components/position";
import LosingComp from "../components/losing";
import LifeComp from "../components/life";

import MoveSystem from "../systems/move_system";
import LosingSystem from "../systems/losing_system";
import PlayerComp from "../components/player";
import MovePlayerSystem from "../systems/move_player_system";
import Player from "../player";
import ShotSystem from "../systems/shot_system";
import VisualSystem from "../systems/visual_system";




export default class GameSc extends Scene {

    private entitys: Entity[] = [];
    private systems: ISystem[] = [];

    private player: Player;

    public init(){
        super.init();

        this.player = new Player();

        this.createEntity();
        this.addSystems();

        this.run();

    }

    private createEntity(){

        for (let line = 0; line < 3; line++) {
            const entity = new Entity();

            entity.addComponent(new PositionComp(3, line));
            entity.addComponent(new LosingComp());
            entity.addComponent(new PlayerComp());
            entity.addComponent(new LifeComp());
            
            this.entitys.push(entity);
        }

    }

    private addSystems(){
        this.systems = [
            new MoveSystem(),
            new LosingSystem(),
            new ShotSystem(this.player),
            new VisualSystem(this.player)
        ];
    }

    private run(){
        for ( const system of this.systems ) {
            for ( const entity of this.entitys ) {
                system.read(entity);
            }                        
        }
    }
}
