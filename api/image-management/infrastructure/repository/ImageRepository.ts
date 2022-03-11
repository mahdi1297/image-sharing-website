import CreateImage from "../../application/application.contracts/image/CrateImage";
import IImageRepository from "../../domain/image/IRepository";
import ImageContext from "./../context/ImageContext";

class ImageRepository implements IImageRepository {
  private _context = ImageContext;

  async create(data: CreateImage): Promise<any> {
    return await this._context.create(data);
  }

  async update(_id: string, data: any) {
    return await this._context.findOneAndUpdate({ _id: _id }, data);
  }

  async getById(_id: string) {
    return await this._context.findOne({ _id });
  }

  async delete(_id: string) {}
}

export default ImageRepository;
