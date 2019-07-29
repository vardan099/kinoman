const fakeData = [
    {
        adult: false,
        backdrop_path: "/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
        genre_ids: (5) [12, 16, 10751, 18, 28],
        id: 420818,
        original_language: "en",
        original_title: "The Lion King",
        overview: "Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival. Scar, Mufasa's brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba's exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.",
        popularity: 581.731,
        poster_path: "/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg",
        release_date: "2019-07-12",
        title: "The Lion King",
        video: false,
        vote_average: 7.1,
        vote_count: 617
    }
];

default async term => {
    return await new Promise(resolve => {
        resolve(fakeData);
    });
};