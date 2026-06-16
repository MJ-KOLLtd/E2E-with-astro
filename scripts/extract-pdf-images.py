"""Extract marketing kit images from PDFs into public/images."""
import fitz
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "images"

MAPPINGS = {
    "commonwealth": {
        "pdf": Path(r"C:\Users\MJ\Downloads\ESQ Commonwealth Mkit.pdf"),
        "out": PUBLIC / "commonwealth",
        "pages": {
            1: [(1, "page01-img1.jpeg"), (2, "page01-img2.jpeg")],
            2: [(1, "page02-img1.jpeg"), (2, "page02-img2.jpeg")],
            3: [(1, "page03-img1.jpeg"), (2, "page03-img2.jpeg")],
            4: [(1, "page04-img1.jpeg")],
            5: [(1, "page05-img1.jpeg")],
            6: [(1, "page06-img1.jpeg")],
            8: [(1, "page08-img1.jpeg")],
            10: [(1, "page10-img1.jpeg")],
            11: [(1, "page11-img1.jpeg")],
            12: [(1, "page12-img1.jpeg")],
            13: [(1, "page13-img1.jpeg")],
        },
        "renders": {
            1: "render-page01.png",
            7: "render-page07.png",
            8: "render-page08.png",
            9: "render-page09.png",
            10: "render-page10.png",
            11: "render-page11.png",
            12: "render-page12.png",
            13: "render-page13.png",
            14: "render-page14.png",
        },
    },
    "9-handel-homes": {
        "pdf": Path(r"C:\Users\MJ\Downloads\9HH Mkit.pdf"),
        "out": PUBLIC / "9-handel-homes",
        "pages": {
            1: [(1, "page01-img1.jpeg"), (2, "page01-img2.jpeg")],
            2: [(1, "page02-img1.jpeg")],
            3: [(1, "page03-img1.jpeg")],
            4: [(1, "page04-img1.jpeg")],
            5: [(1, "page05-img1.jpeg")],
            6: [(1, "page06-img1.jpeg")],
            8: [(1, "page08-img1.jpeg"), (2, "page08-img2.jpeg")],
            9: [(1, "page09-img1.jpeg"), (2, "page09-img2.jpeg")],
            10: [(1, "page10-img1.jpeg"), (2, "page10-img2.jpeg")],
            11: [(1, "page11-img1.jpeg"), (2, "page11-img2.jpeg")],
            12: [(1, "page12-img1.jpeg"), (2, "page12-img2.jpeg")],
            13: [(1, "page13-img1.jpeg"), (2, "page13-img2.jpeg")],
            14: [(1, "page14-img1.jpeg"), (2, "page14-img2.jpeg")],
            15: [(1, "page15-img1.jpeg"), (2, "page15-img2.jpeg")],
        },
        "renders": {
            1: "render-page01.png",
            4: "render-page04.png",
            7: "render-page07.png",
            8: "render-page08.png",
            9: "render-page09.png",
            10: "render-page10.png",
            11: "render-page11.png",
            12: "render-page12.png",
            13: "render-page13.png",
            14: "render-page14.png",
            15: "render-page15.png",
            16: "render-page16.png",
            17: "render-page17.png",
        },
    },
}


def main() -> None:
    for key, cfg in MAPPINGS.items():
        doc = fitz.open(cfg["pdf"])
        cfg["out"].mkdir(parents=True, exist_ok=True)

        for page_num, img_specs in cfg["pages"].items():
            page = doc[page_num - 1]
            images = page.get_images(full=True)
            for img_idx, out_name in img_specs:
                if img_idx > len(images):
                    print(f"SKIP {key} p{page_num} img{img_idx}: only {len(images)} images")
                    continue
                xref = images[img_idx - 1][0]
                base = doc.extract_image(xref)
                out_path = cfg["out"] / out_name
                out_path.write_bytes(base["image"])
                print(f"Wrote {out_path.name} ({base['width']}x{base['height']})")

        for page_num, out_name in cfg["renders"].items():
            page = doc[page_num - 1]
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
            out_path = cfg["out"] / out_name
            pix.save(out_path)
            print(f"Rendered {out_path.name} from page {page_num}")

        doc.close()

    print("Done")


if __name__ == "__main__":
    main()