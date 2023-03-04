import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Poll } from "./poll.entity";
import { PollService } from "./poll.service"

const onePoll = {
    id: 0,
    title: "First poll",
    week: 1,
    year: 2023
}

const pollArray = [
    onePoll,
    {
        id: 1,
        title: "Second poll",
        week: 2,
        year: 2023
    }
];

describe('PollService', () => {
    let service: PollService;
    let repository: Repository<Poll>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                PollService,
                {
                    provide: getRepositoryToken(Poll),
                    useValue: {
                        find: jest.fn().mockReturnValue(pollArray),
                        findOneBy: jest.fn().mockReturnValue(onePoll),
                        save: jest.fn().mockReturnValue(onePoll),
                        delete: jest.fn().mockReturnValue(onePoll)
                    }
                },
            ]
        }).compile();

        service = module.get<PollService>(PollService);
        repository = module.get<Repository<Poll>>(getRepositoryToken(Poll));

    });
    test('should be defined', () => {
        expect(service).toBeDefined();
    });
    describe('find()', () => {
        test('should return an array of polls', () => {
          const users = service.findAll();
          expect(users).toEqual(pollArray);
        });
    });
    describe('findOneBy()', () => {
        test('should return the poll with id 0', () => {
          const users = service.findOne(0);
          expect(users).toEqual(onePoll);
        });
    });
    describe('save()', () => {
        test('should add the poll with id 0', () => {
          const users = service.add(onePoll);
          expect(users).toEqual(onePoll);
        });
    });
    describe('remove()', () => {
        it('should call remove with the passed value', async () => {
          const removeSpy = jest.spyOn(repository, 'delete');
          const retVal = service.remove(0);
          expect(removeSpy).toBeCalledWith(0);
          expect(retVal).toEqual(onePoll);
        });
      });
    
})