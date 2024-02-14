import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosComponent } from './cursos.component';
import { MockProvider } from 'ng-mocks';
import { CursosService } from './cursos.service';

describe('Pruebas de CursosComponent', () => {
    let fixture: ComponentFixture<CursosComponent>;
    let component: CursosComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CursosComponent],
            providers: [MockProvider(CursosService)],
        }).compileComponents();
        
        fixture = TestBed.createComponent(CursosComponent);
        component = fixture.componentInstance;
    });

    it('Las columnas de los cursos deben ser "id", "cursoNombre", "createdAt", "acciones"', () => {
        expect(component.displayedColumns).toContain('id');
        expect(component.displayedColumns).toContain('cursoNombre');
        expect(component.displayedColumns).toContain('createdAt');
        expect(component.displayedColumns).toContain('acciones');
    });
});