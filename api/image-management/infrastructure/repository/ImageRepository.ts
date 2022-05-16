import CreateImage from "../../domain/image/dtos/CreateImage";
import ImageIdDto from "../../domain/image/dtos/ImageIdDto";
import IImageRepository from "../../domain/image/IRepository";
import ImageContext from "./../context/ImageContext";

class ImageRepository implements IImageRepository {
  private _context = ImageContext;

  async list(itemsToShow: any): Promise<any> {
    return await this._context.find({}, itemsToShow).lean();
  }

  async create(data: CreateImage): Promise<any> {
    return await this._context.create(data);
  }

  async update(_id: string, data: any) {
    return await this._context.findOneAndUpdate({ _id: _id }, data);
  }

  async getById(_id: string) {
    return await this._context.findOne({ _id });
  }

  async getRelated(tags: any) {
    return await this._context.find({ tags: { $in: tags } });
  }

  async getListByUsername(username: string) {
    return await this._context.find({ "user.username": username });
  }

  async search(tags: any): Promise<any> {
    return await this._context.find({ tags: { $in: tags } });
  }

  async getCategories(items: any): Promise<any> {
    // return await this._context.find({})
  }

  async getIds(): Promise<any> {
    return await this._context.find({}, ["_id"]);
  }

  async delete(_id: string) {}
}

export default ImageRepository;
