import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TestBoxCasePipe } from './test-box-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseForm2Component } from './new-course-form2/new-course-form2.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/handlerErrors/app.error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './admin/admin.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { OrderService } from './services/order.service';
import { fakeBackendProvider } from './helpers/fake-backend';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { AdminAuthGuardService as AdminAuthGuard } from './services/admin-auth-guard.service';
import { environment } from 'src/environments/environment';
import { TodosComponent } from './todos/todos.component';
import { ZippyAnimationsComponent } from './zippy-animations/zippy-animations.component';
import { MaterialCheckboxComponent } from './material-checkbox/material-checkbox.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MaterialRadioButtonComponent } from './material-radio-button/material-radio-button.component';
import { MatRadioModule } from "@angular/material/radio";
import { MaterialSelectComponent } from './material-select/material-select.component';
import { MatSelectModule } from "@angular/material/select";
import { MaterialInputComponent } from './material-input/material-input.component';
import { MatInputModule } from "@angular/material/input";
import { MaterialDatepickerComponent } from './material-datepicker/material-datepicker.component';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MaterialIconComponent } from './material-icon/material-icon.component';

export function tokenGetter() {
    return localStorage.getItem('token');
}

// You have to register all Components, Pipes and Directives on NgModule
@NgModule({
    declarations: [
        AppComponent,
        CoursesComponent,
        CourseComponent,
        SummaryPipe,
        FavoriteComponent,
        TestBoxCasePipe,
        PanelComponent,
        LikeComponent,
        InputFormatDirective,
        ZippyComponent,
        ContactFormComponent,
        NewCourseFormComponent,
        SignupFormComponent,
        NewCourseForm2Component,
        ChangePasswordComponent,
        PostsComponent,
        GithubFollowersComponent,
        GithubProfileComponent,
        HomeComponent,
        NavbarComponent,
        NotFoundComponent,
        ArchiveComponent,
        LoginComponent,
        AdminComponent,
        NoAccessComponent,
        TodosComponent,
        ZippyAnimationsComponent,
        MaterialCheckboxComponent,
        MaterialRadioButtonComponent,
        MaterialSelectComponent,
        MaterialInputComponent,
        MaterialDatepickerComponent,
        MaterialIconComponent
    ],
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminAuthGuard] },
            { path: 'login', component: LoginComponent },
            { path: 'no-access', component: NoAccessComponent },
            { path: 'archive/:year/:month', component: ArchiveComponent },
            { path: 'followers/:username/:id', component: GithubProfileComponent },
            { path: 'followers', component: GithubFollowersComponent },
            { path: 'courses', component: CourseComponent },
            { path: 'posts', component: PostsComponent },
            { path: '**', component: NotFoundComponent }
        ]),
        JwtModule.forRoot({
            config: {
                tokenGetter,
                whitelistedDomains: ['example.com'],
                blacklistedRoutes: ['example.com/examplebadroute/']
            }
        })
    ],
    providers: [
        AuthService,
        AuthGuard,
        AdminAuthGuard,
        OrderService,
        CoursesService,
        PostService,
        GithubFollowersService,
        { provide: ErrorHandler, useClass: AppErrorHandler },
        // For creating a mock back-end. You don't need these in a real app.
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
