import { MatTreeSelectModule } from './mat-tree-select.module';

describe('MatTreeSelectModule', () => {
  let matTreeSelectModule: MatTreeSelectModule;

  beforeEach(() => {
    matTreeSelectModule = new MatTreeSelectModule();
  });

  it('should create an instance', () => {
    expect(matTreeSelectModule).toBeTruthy();
  });
});
