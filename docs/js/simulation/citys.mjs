import { cityDistrict } from "./citydistrict.mjs";

export class city {
    //store the citys data
    constructor(game, x, y, name, size) {
        //the next districts that can be added to this city
        this.validnextdistricts = []; 
        //the existing tiles that belong to this city
        this.districts = [];
        this.population = 0;
        this.x = x;
        this.y = y;

        this.name = name;
        this.size = size;

    }
    //actually creating it
    createCity(game){
        //the root district of the city
        this.citycenter = this.addDistrict(0, this, this.x, this.y, game);
        for (let i = 0; i < this.size; i++) {
            if(this.validnextdistricts.length>0){
                //generate one of the districts on a valid tile
                let randomIndex = Math.floor(Math.random() * this.validnextdistricts.length);
                let [districtX, districtY] = this.validnextdistricts[randomIndex];
                this.addDistrict(this.districts.length, this, districtX, districtY, game);
                //prevent multiple districts per tile
                this.validnextdistricts.splice(randomIndex, 1);
            }
        }
    }
    addDistrict(id, city, x, y, game) {
        let tempdist = new cityDistrict(id, city, x, y, game);
        tempdist.createDistrict(game);
        tempdist.addNeighbourTiles(game);

        for (let i = 0; i < tempdist.validNeighbours.length; i++) {
            this.validnextdistricts.push(tempdist.validNeighbours[i]);
        }
        this.population += tempdist.population;
        this.districts.push(tempdist)
        return [x, y]
    }
    }



