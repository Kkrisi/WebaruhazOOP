

export default class TSor {

    #termekObj={};
    #szuloElem;
    #sorElem;
    #torlesElem;

    constructor(termekObj,szuloElem){
        this.#termekObj = termekObj;
        this.#szuloElem = szuloElem;
        this.#sorokLetrehozasa();   //itt ez le is fut
        this.#torlesElem = this.#szuloElem.children("tr:last-child").children(".kuka")
        console.log(this.#torlesElem)
        this.#torlesElem.on("click",()=>{
            this.#trigger("torol")
        })
    }


    #trigger(esemenynev){
        const e = new CustomEvent(esemenynev, {detail:this.#termekObj.id})
        window.dispatchEvent(e)
    }


    #sorokLetrehozasa(){
        let txt = `<tr>`

    //foreach listan megy, forin objektumon megy vegig
        for (const key in this.#termekObj) {

            // az objektumban elvők id: pl 3.
            txt += `<td>${this.#termekObj[key]}</td>`;
            
        }

        txt += ` <td class="kuka">🗑️</td>`;
        txt += `<td></td>`
        txt += `</tr>`;
        this.#szuloElem.append(txt);
    }
}