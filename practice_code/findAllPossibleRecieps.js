/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {
    let can = [];
    let supply = new Set(supplies);
    let missing = new Map();
    for (let i = 0; i < recipes.length; i++) {
        let possible = true;
        for (let j of ingredients[i]) {
            if (!supply.has(j)) {
                possible = false;
                missing.set(recipes[i], (missing.get(recipes[i]) || []).concat(j));
            }
        }
        if (possible) {
            can.push(recipes[i]);
            supply.add(recipes[i]);
        }
    }
    // if we have created something that is missing
    let newInger = true;
    while (newInger) {
        newInger = false;
        for (let [i, j] of missing) {
            for (let inger of j) {
                possible = true;
                if (!supply.has(inger)) {
                    possible = false;
                    break;
                }
            }
            if (possible) {
                can.push(i);
                supply.add(i);
                newInger = true;
                missing.set(i, ["0"]);
            }
        }
    }
    return can;
};

console.log(findAllRecipes(
    recipes = ["xevvq","izcad","p","we","bxgnm","vpio","i","hjvu","igi","anp",
        "tokfq","z","kwdmb","g","qb","q","b","hthy"],
    ingredients = [["wbjr"],["otr","fzr","g"],["fzr","wi","otr","xgp","wbjr","igi","b"],
        ["fzr","xgp","wi","otr","tokfq","izcad","igi","xevvq","i","anp"],
        ["wi","xgp","wbjr"],["wbjr","bxgnm","i","b","hjvu","izcad","igi","z","g"],
        ["xgp","otr","wbjr"],["wbjr","otr"],["wbjr","otr","fzr","wi","xgp","hjvu","tokfq","z","kwdmb"],
        ["xgp","wi","wbjr","bxgnm","izcad","p","xevvq"],["bxgnm"],["wi","fzr","otr","wbjr"],
        ["wbjr","wi","fzr","xgp","otr","g","b","p"],["otr","fzr","xgp","wbjr"],
        ["xgp","wbjr","q","vpio","tokfq","we"],["wbjr","wi","xgp","we"],["wbjr"],["wi"]],
    supplies = ["wi","otr","wbjr","fzr","xgp"])
);
