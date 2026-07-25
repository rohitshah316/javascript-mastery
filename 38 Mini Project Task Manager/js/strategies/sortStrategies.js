

export const sortStrategies={

    newest(tasks){

        return [...tasks].sort(function(a,b){
            return new Date(b.createdAt)-new Date(a.createdAt);
        })
    },

    oldest(tasks){
        return [...tasks].sort(function(a,b){
            return new Date(a.createdAt)-new Date(b.createdAt)
        })
    }
    ,


    alphabetical(tasks){

        return [...tasks].sort(function(a,b){

            return a.title.localeCompare(b.title);

        });

    },


    priority(tasks){

        const order = {
            High: 1,
            Medium: 2,
            Low: 3
        };


        return [...tasks].sort(function(a,b){

            return order[a.priority] - order[b.priority];

        });

    }

}