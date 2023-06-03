export class Recipe {
    constructor(public Code: number,
        public Name: string,
        public CategoryCode: number,
        public MinutesToMake: number,
        public Level: number,
        public AddedDate: Date,
        public Ingreadients: Array<String>,
        public Introductions: Array<String>,
        public UserCode: string,
        public Image: string) { }
}
