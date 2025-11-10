/*
I want to display:
common_name
scientific_name
default_image
family
genus
*/

export type Plant = {
    common_name: string;
    scientific_name: string;
    family: string;
    genus: string;
    default_image: string[];
};