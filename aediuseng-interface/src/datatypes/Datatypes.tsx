type Pagecontent = {
    section_name: string,
    subsection_id:number,
    subsection_name: string,
    subsection_content: string
}

interface Pageprops {
    propContent: Pagecontent[],
    propUpdate: (id:number, content:string, contentType:string)=>void
}


export type {Pagecontent, Pageprops}