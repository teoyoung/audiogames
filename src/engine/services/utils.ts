export class Utils {

    public getRandomInt(min: number, max: number): number {
        const minV = Math.ceil(min);
        const maxV = Math.floor(max);
        return Math.floor(Math.random() * (maxV - minV)) + minV;
    }

    public getInterpolationToMax(max: number, t: number): number {
        const inter = (100*t/max) / 100
        return Math.abs(inter);
    }
}