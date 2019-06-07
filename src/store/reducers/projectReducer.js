const initState = {
    projects:[
        {id:1 ,title:"the title of this post" ,content : "the content of thes item;l  ;lmlokd df, al[smkdpoakd s;'lp  ';lasdpkl l;'kopkp  ;'pkp  "},
        {id:2 ,title:"the title of this post" ,content : "the content of thes item;l  ;lmlokd df, al[smkdpoakd s;'lp  ';lasdpkl l;'kopkp  ;'pkp  "},
        {id:3 ,title:"the title of this post" ,content : "the content of thes item;l  ;lmlokd df, al[smkdpoakd s;'lp  ';lasdpkl l;'kopkp  ;'pkp  "}
    ]
}

export const projectReducer = (state = initState , action) =>{
    switch(action.type) {

        case 'CREATE_PROJECT':
                              return state;
        case 'CREATE_PROJECT_ERROR': console.log(action.err);
                                     return state;
        default : return state;                                                   
        
        
    }


}

