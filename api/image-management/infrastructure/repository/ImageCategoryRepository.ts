import IImageCategoryRepository from "../../domain/image-category/IImageCategoryRepository";
import ImageCategoryContext from "./../context/ImageCategoryContext";

class ImageCategoryRepository implements IImageCategoryRepository {
  // Add context
  private _context = ImageCategoryContext;

  async create(name: any) {
    return await this._context.create(name);
  }

  async getList(): Promise<any> {
    return await this._context.find({});
  }

  async exists(name: string): Promise<any> {
    return await this._context.exists({ label: name });
  }

  async getSearch(name: any): Promise<any> {
    return await this._context.find({
      label: { $regex: name, $options: "i" },
    });
  }

  async update(_id: string, name: string): Promise<any> {
    return await this._context.updateOne({ _id }, { name });
  }

  async remove(_id: string): Promise<any> {
    return await this._context.updateOne({ _id }, { isRemoved: "true" });
  }

  async refactor(_id: string): Promise<any> {
    return await this._context.updateOne({ _id }, { isRemoved: "false" });
  }

  async search(names: any): Promise<any> {
    return await this._context.find({ name: names });
  }
}

export default ImageCategoryRepository;
