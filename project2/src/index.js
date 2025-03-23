import 'core-js/stable';
import 'regenerator-runtime/runtime';
import getSentryObjects from './sentryObjects';
import SentryObject from './objects';



async function objectsList() {
    try {

        let sentryObjectsList = [];
        let objectJSON = await getSentryObjects();
        console.log(objectJSON)
        objectJSON.forEach(object => {

            const objectId = object["spkId"];
            const fullName = object["fullname"];
            const minYears = object["year_range_min"];
            const maxYears = object["year_range_max"];

            // const allObjectData = `${objectId},${fullName},${minYears},${maxYears}`;
            const allObjectData = new SentryObject(objectId, fullName, minYears, maxYears)
            sentryObjectsList.push(allObjectData);
        });
        renderObjects(sentryObjectsList);
    } catch (error) {
        console.error("Erro:", error);
    };
}

async function renderObjects(object) {

    const olElement = document.getElementById("sentry-object-list");

    object.forEach(object => {

        const pElement = document.createElement("p");

        let objectText = `ID:(${object.id}) Nome:${object.name} - risco de colisão entre ${object.minYears} e ${object.maxYears}`;

        pElement.innerText = objectText;

        olElement.appendChild(pElement)

    })

}

objectsList()