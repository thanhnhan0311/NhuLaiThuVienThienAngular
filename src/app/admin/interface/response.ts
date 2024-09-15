
export interface BookDto{
    book_id : number,
    book_name : string,
    book_image : string,
    book_author : string,
    book_category : string,
    book_description : string,
    chapters_total : number,
    Chapters: ChapterDto[]
}

export interface ChapterDto{
    chapter_name: string,
    chapter_content : string,
}

