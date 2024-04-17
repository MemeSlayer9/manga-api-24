import { Router } from "express";
import { Comick } from "../../../../scraper/sites/manga/comick/Comick";
const Manga = new Comick();
const router = Router();


router.get("/manga/comick/filter", async (req, res) => {
    const { search, type, year, genre, last_chapter, page } = req.query;

    const data = await Manga.GetMangaByFilter(search as string, type as unknown as number, year as string, last_chapter as string, genre as string, page as unknown as number)

    res.send(data)
});

router.get("/manga/comick/top", async (req, res) => {
    const {comic_types} = req.query
    const data = await Manga.GetMangaByTop(comic_types as string)

    res.send(data)
});

router.get("/manga/comick/recentrank", async (req, res) => {
    const {comic_types} = req.query
    const data = await Manga.GetMangaByRecentRank(comic_types as string)

    res.send(data)
});


router.get("/manga/comick/latest", async (req, res) => {
    const {  type, page, order } = req.query;

    const data = await Manga.GetChaptersByHot(type as string, page as unknown as number, order as string)

    res.send(data)
});


router.get("/manga/comick/title/:manga", async (req, res) => {
    const { manga } = req.params;
    const { lang } = req.query;

    const data = await Manga.GetMangaInfo(manga, lang as string)

    res.send(data)
});

router.get("/manga/comick/chapter/:chapter", async (req, res) => {
    const { chapter } = req.params
    const { lang } = req.query;

    const data = await Manga.GetChapterInfo(chapter, lang as string)

    res.send(data)
});
export default router