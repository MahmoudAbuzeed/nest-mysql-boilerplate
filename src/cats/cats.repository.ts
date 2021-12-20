import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

class CatsRepository {
  async create(createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  async findAll() {
    return `This action returns all cats`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  async remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}

export default new CatsRepository();
