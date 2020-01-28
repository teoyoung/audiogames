import Scene from "../../engine/scene";
import Entity, {IEntity} from "../../engine/ecs/ecs_entity";
import ISystem from '../../engine/ecs/i_system';
import PositionComp from "../components/position";
import LosingComp from "../components/losing";
import MoveSystem from "../systems/move_system";
import LosingSystem from "../systems/losing_system";
import PlayerComp from "../components/player";
import MovePlayerSystem from "../systems/move_player_system";




export default class GameSc extends Scene {

    private entitys: Entity[] = [];
    private systems: ISystem[] = [];

    public init(){
        super.init();

        this.createEntity();
        this.addSystems();
        this.run();
        this.run();
        this.run();
        this.run();
        this.run();
    }

    private createEntity(){

        for (let line = 0; line < 3; line++) {
            const entity = new Entity();

            entity.addComponent(new PositionComp(3, line));
            entity.addComponent(new LosingComp());
            entity.addComponent(new PlayerComp());
            
            this.entitys.push(entity);
        }

    }

    private addSystems(){
        this.systems = [
            new MoveSystem(),
            new LosingSystem(),
            new MovePlayerSystem()

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
