"use strict";(self.webpackChunkcliniva=self.webpackChunkcliniva||[]).push([[891],{79891:(st,A,r)=>{r.r(A),r.d(A,{LogisticsModule:()=>rt});var u=r(69808),d=r(1402),t=r(5e3),b=r(82848),f=r(57261),v=r(41299),s=r(93075),p=r(47423),L=r(92181),h=r(25245),C=r(61676),q=r(86087);const _=function(o){return["/admin/logistics/edit-logistic",o]};function y(o,a){if(1&o){const i=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"a",21),t._UZ(9,"app-feather-icons",22),t.qZA(),t.TgZ(10,"button",23),t.NdJ("click",function(){const c=t.CHM(i).$implicit;return t.oxw().deleteLogistique(c.idLogi)}),t._UZ(11,"app-feather-icons",22),t.qZA()()()}if(2&o){const i=a.$implicit;t.xp6(2),t.Oqu(i.typeLogi),t.xp6(2),t.Oqu(i.nomLogi),t.xp6(2),t.Oqu(i.nombreLogi),t.xp6(2),t.Q6J("routerLink",t.VKq(10,_,i.idLogi)),t.xp6(1),t.Tol("tbl-fav-edit"),t.Q6J("icon","edit"),t.xp6(2),t.Tol("tbl-fav-delete"),t.Q6J("icon","trash-2")}}const x=function(){return["Operations"]},U=function(){return[10,20,30]};let S=(()=>{class o{constructor(i,e){this.logistiqueService=i,this._snackBar=e,this.logistiques=[],this.filteredLogistiques=[],this.errorMessage="",this.lowValue=0,this.searchTerm="",this.sortingCriteria="",this.highValue=10}ngOnInit(){this.getLogistiques()}getPaginatorData(i){return this.lowValue=i.pageIndex*i.pageSize,this.highValue=this.lowValue+i.pageSize,i}getLogistiques(){this.logistiqueService.getAllLogistiques().subscribe({next:i=>{this.logistiques=i,this.sortLogisticss(),this.filterLogistics()},error:i=>{this.errorMessage=i}})}sortByType(){this.sortingCriteria="typeLogi",this.sortLogisticss()}sortByNom(){this.sortingCriteria="nomLogi",this.sortLogisticss()}sortByNombre(){this.sortingCriteria="nombreLogits",this.sortLogisticss()}sortByTypeAndNom(){this.sortingCriteria="typeAndNom",this.sortLogisticss()}filterLogistics(){this.filteredLogistiques=this.searchTerm?this.logistiques.filter(i=>i.typeLogi&&i.typeLogi.toLowerCase().includes(this.searchTerm.toLowerCase())||i.nomLogi&&i.nomLogi.toLowerCase().includes(this.searchTerm.toLowerCase())||i.nombreLogi&&i.nombreLogi==+this.searchTerm):this.logistiques}sortLogisticss(){if(this.sortingCriteria){const i=this.sortingCriteria.split("-"),e=this.sortingCriteria.startsWith("-");this.logistiques.sort((n,c)=>{for(let Z=0;Z<i.length;Z++){const g=i[Z];if("nombreLogits"===g){const m=n[g]>c[g]?1:n[g]<c[g]?-1:0;if(0!==m)return e?-m:m}else if("typeLogi"===g){const m=n[g].toLowerCase()>c[g].toLowerCase()?1:n[g].toLowerCase()<c[g].toLowerCase()?-1:0;if(0!==m)return e?-m:m}else if("nomLogi"===g){const m=n[g].toLowerCase()>c[g].toLowerCase()?1:n[g].toLowerCase()<c[g].toLowerCase()?-1:0;if(0!==m)return e?-m:m}}return e?c.idLogi-n.idLogi:n.idLogi-c.idLogi})}}openSnackBar(i,e){this._snackBar.open(i,e)}deleteLogistique(i){console.log(i),this.logistiqueService.deleteLogistique(i).subscribe({next:()=>{this.logistiques=this.logistiques.filter(e=>e.idLogi!==i),this.sortLogisticss(),this.filterLogistics()},error:e=>{this.openSnackBar("Delete failed!","\u{1f614}")}})}setSortingCriteria(i){this.sortingCriteria=this.sortingCriteria===i?"-"+i:i,this.sortLogisticss(),this.filterLogistics()}clearSortingCriteria(){this.sortingCriteria="",this.sortLogisticss(),this.filterLogistics()}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(b.G),t.Y36(f.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-logistics"]],decls:50,vars:14,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"container","mt-5"],[1,"row"],[1,"col"],[1,"row","mt-3"],[1,"materialTableHeader"],[1,"header-buttons-left","ms-0"],[1,"dropdown","m-l-20"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","name","searchTerm","aria-label","Search box",1,"browser-default","search-field",3,"ngModel","ngModelChange","input"],["filter",""],["mat-button","",1,"header-dropdown",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["pageSize","10","showFirstLastButtons","false",3,"length","pageSizeOptions","page"],["mat-icon-button","",1,"tbl-action-btn",3,"routerLink"],[3,"icon"],["mat-icon-button","",1,"tbl-action-btn",3,"click"]],template:function(i,e){if(1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"h2"),t._uU(8,"Logistics List"),t.qZA()()(),t.TgZ(9,"div",7)(10,"div",6)(11,"div",8)(12,"div",5)(13,"div",6)(14,"ul",9)(15,"li",10)(16,"label",11)(17,"i",12),t._uU(18,"search"),t.qZA()(),t.TgZ(19,"input",13,14),t.NdJ("ngModelChange",function(c){return e.searchTerm=c})("input",function(){return e.filterLogistics()}),t.qZA()(),t.TgZ(21,"li")(22,"button",15)(23,"mat-icon"),t._uU(24,"filter_list"),t.qZA()(),t.TgZ(25,"mat-menu",null,16)(27,"button",17),t.NdJ("click",function(){return e.sortByNom()}),t._uU(28,"Nom"),t.qZA(),t.TgZ(29,"button",17),t.NdJ("click",function(){return e.sortByType()}),t._uU(30,"Type"),t.qZA(),t.TgZ(31,"button",17),t.NdJ("click",function(){return e.sortByNombre()}),t._uU(32,"Nombre"),t.qZA(),t.TgZ(33,"button",17),t.NdJ("click",function(){return e.sortByTypeAndNom()}),t._uU(34,"Type and Nom"),t.qZA()()()()()()(),t.TgZ(35,"table",18)(36,"thead")(37,"tr")(38,"th"),t._uU(39,"Type"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Nom Logistique"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"Nombre"),t.qZA(),t.TgZ(44,"th"),t._uU(45,"Actions"),t.qZA()()(),t.TgZ(46,"tbody"),t.YNc(47,y,12,12,"tr",19),t.ALo(48,"slice"),t.qZA()(),t.TgZ(49,"mat-paginator",20),t.NdJ("page",function(c){return e.getPaginatorData(c)}),t.qZA()()()()()()),2&i){const n=t.MAs(26);t.xp6(3),t.Q6J("title","Add Operation")("items",t.DdM(12,x))("active_item","Add Operation"),t.xp6(16),t.Q6J("ngModel",e.searchTerm),t.xp6(3),t.Q6J("matMenuTriggerFor",n),t.xp6(25),t.Q6J("ngForOf",t.Dn7(48,8,e.filteredLogistiques,e.lowValue,e.highValue)),t.xp6(2),t.Q6J("length",e.filteredLogistiques.length)("pageSizeOptions",t.DdM(13,U))}},directives:[v.L,s.Fj,s.JJ,s.On,p.lW,L.p6,h.Hw,L.VK,L.OP,u.sg,p.zs,d.yS,C.A,q.NW],pipes:[u.OU],styles:[""]}),o})();var l=r(67322),T=r(77531);function J(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Type is required "),t.qZA())}function N(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Logistic name is required "),t.qZA())}function F(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Logistic's number cannot be empty "),t.qZA())}function I(o,a){if(1&o){const i=t.EpF();t.TgZ(0,"form",10),t.NdJ("ngSubmit",function(){return t.CHM(i),t.oxw().onSubmit()}),t.TgZ(1,"div",11)(2,"div",12)(3,"mat-form-field",13)(4,"mat-label"),t._uU(5,"Logistic Type"),t.qZA(),t._UZ(6,"input",14),t.TgZ(7,"mat-icon",15),t._uU(8,"info"),t.qZA(),t.YNc(9,J,2,0,"mat-error",16),t.qZA()()(),t.TgZ(10,"div",11)(11,"div",12)(12,"mat-form-field",13)(13,"mat-label"),t._uU(14,"logistic name"),t.qZA(),t._UZ(15,"input",17),t.TgZ(16,"mat-icon",15),t._uU(17,"info"),t.qZA(),t.YNc(18,N,2,0,"mat-error",16),t.qZA()()(),t.TgZ(19,"div",11)(20,"div",12)(21,"mat-form-field",13)(22,"mat-label"),t._uU(23,"Logistic number"),t.qZA(),t._UZ(24,"input",18),t.TgZ(25,"mat-icon",15),t._uU(26,"info"),t.qZA(),t.YNc(27,F,2,0,"mat-error",16),t.qZA()()(),t.TgZ(28,"div",11)(29,"div",12)(30,"div",19)(31,"button",20),t._uU(32,"Save"),t.qZA(),t.TgZ(33,"button",21),t._uU(34,"Cancel"),t.qZA()()()()()}if(2&o){const i=t.oxw();t.Q6J("formGroup",i.editLogiForm),t.xp6(9),t.Q6J("ngIf",i.editLogiForm.get("typeLogi").hasError("required")),t.xp6(9),t.Q6J("ngIf",i.editLogiForm.get("nomLogi").hasError("required")),t.xp6(9),t.Q6J("ngIf",i.editLogiForm.get("nombreLogi").hasError("required")),t.xp6(4),t.Q6J("disabled",!i.editLogiForm.valid)}}const B=function(){return["Logistics"]};function M(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Type is required "),t.qZA())}function O(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Logistic name is required "),t.qZA())}function Q(o,a){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Logistic's number cannot be empty "),t.qZA())}function Y(o,a){if(1&o){const i=t.EpF();t.TgZ(0,"form",10),t.NdJ("ngSubmit",function(){return t.CHM(i),t.oxw().onSubmit()}),t.TgZ(1,"div",11)(2,"div",12)(3,"mat-form-field",13)(4,"mat-label"),t._uU(5,"Logistic Type"),t.qZA(),t._UZ(6,"input",14),t.TgZ(7,"mat-icon",15),t._uU(8,"info"),t.qZA(),t.YNc(9,M,2,0,"mat-error",16),t.qZA()()(),t.TgZ(10,"div",11)(11,"div",12)(12,"mat-form-field",13)(13,"mat-label"),t._uU(14,"logistic name"),t.qZA(),t._UZ(15,"input",17),t.TgZ(16,"mat-icon",15),t._uU(17,"info"),t.qZA(),t.YNc(18,O,2,0,"mat-error",16),t.qZA()()(),t.TgZ(19,"div",11)(20,"div",12)(21,"mat-form-field",13)(22,"mat-label"),t._uU(23,"Logistic number"),t.qZA(),t._UZ(24,"input",18),t.TgZ(25,"mat-icon",15),t._uU(26,"info"),t.qZA(),t.YNc(27,Q,2,0,"mat-error",16),t.qZA()()(),t.TgZ(28,"div",11)(29,"div",12)(30,"div",19)(31,"button",20),t._uU(32,"Save"),t.qZA(),t.TgZ(33,"button",21),t._uU(34,"Cancel"),t.qZA()()()()()}if(2&o){const i=t.oxw();t.Q6J("formGroup",i.addLogForm),t.xp6(9),t.Q6J("ngIf",i.addLogForm.get("typeLogi").hasError("required")),t.xp6(9),t.Q6J("ngIf",i.addLogForm.get("nomLogi").hasError("required")),t.xp6(9),t.Q6J("ngIf",i.addLogForm.get("nombreLogi").hasError("required")),t.xp6(4),t.Q6J("disabled",!i.addLogForm.valid)}}const k=function(){return["Logistics"]},z=[{path:"",component:S},{path:"edit-logistic/:id",component:(()=>{class o{constructor(i,e,n,c){this.fb=i,this.route=e,this.logServ=n,this._snackBar=c}openSnackBar(i,e){this._snackBar.open(i,e)}onSubmit(){let i=this.editLogiForm.value;i=Object.assign(Object.assign({},this.fetched),i),this.logServ.updateLogistique(i).subscribe({next:e=>{this.openSnackBar("Edit success!","\u{1f601}")},error:e=>{this.openSnackBar("Edit failed!","\u{1f614}")}})}ngOnInit(){this.sub=this.route.params.subscribe(i=>{this.id=+i.id}),this.fetchData()}ngOnDestroy(){this.sub.unsubscribe()}fetchData(){this.logServ.getLogistiqueById(this.id).subscribe({next:i=>{this.fetched=i,this.editLogiForm=this.fb.group({typeLogi:[i.typeLogi,[s.kI.required]],nomLogi:[i.nomLogi,[s.kI.required]],nombreLogi:[i.nombreLogi,[s.kI.required]]})},error:i=>{}})}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(s.qu),t.Y36(d.gz),t.Y36(b.G),t.Y36(f.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-logistic"]],decls:13,vars:5,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"header"],[1,"body"],["class","register-form m-4",3,"formGroup","ngSubmit",4,"ngIf"],[1,"register-form","m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","typeLogi","required",""],["matSuffix",""],[4,"ngIf"],["matInput","","formControlName","nomLogi","required",""],["matInput","","type","number","formControlName","nombreLogi","required",""],[1,"example-button-row"],["mat-raised-button","","color","primary",3,"disabled"],["type","button","mat-button",""]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2")(9,"strong"),t._uU(10,"Edit Logistic"),t.qZA()()(),t.TgZ(11,"div",8),t.YNc(12,I,35,5,"form",9),t.qZA()()()()()()),2&i&&(t.xp6(3),t.Q6J("title","Edit Logistic")("items",t.DdM(4,B))("active_item","Edit Logistic"),t.xp6(9),t.Q6J("ngIf",e.editLogiForm))},directives:[v.L,u.O5,s._Y,s.JL,s.sg,l.KE,l.hX,T.Nt,s.Fj,s.JJ,s.u,s.Q7,h.Hw,l.R9,l.TO,s.wV,p.lW],styles:[""]}),o})()},{path:"add-logistic",component:(()=>{class o{constructor(i,e,n,c){this.fb=i,this.route=e,this.logServ=n,this._snackBar=c,this.addLogForm=this.fb.group({typeLogi:["",[s.kI.required]],nomLogi:["",[s.kI.required]],nombreLogi:[0,[s.kI.required]]})}openSnackBar(i,e){this._snackBar.open(i,e)}onSubmit(){this.logServ.addLogistique(this.addLogForm.value).subscribe({next:e=>{this.openSnackBar("Add success!","\u{1f601}")},error:e=>{console.log("error updating operation!"),this.openSnackBar("Add failed!","\u{1f614}")}})}ngOnInit(){}ngOnDestroy(){this.sub.unsubscribe()}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(s.qu),t.Y36(d.gz),t.Y36(b.G),t.Y36(f.ux))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-logistic"]],decls:13,vars:5,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"row","clearfix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card"],[1,"header"],[1,"body"],["class","register-form m-4",3,"formGroup","ngSubmit",4,"ngIf"],[1,"register-form","m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","typeLogi","required",""],["matSuffix",""],[4,"ngIf"],["matInput","","formControlName","nomLogi","required",""],["matInput","","type","number","formControlName","nombreLogi","required",""],[1,"example-button-row"],["mat-raised-button","","color","primary",3,"disabled"],["type","button","mat-button",""]],template:function(i,e){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h2")(9,"strong"),t._uU(10,"Add Logistic"),t.qZA()()(),t.TgZ(11,"div",8),t.YNc(12,Y,35,5,"form",9),t.qZA()()()()()()),2&i&&(t.xp6(3),t.Q6J("title","Add Logistic")("items",t.DdM(4,k))("active_item","Add Logistic"),t.xp6(9),t.Q6J("ngIf",e.addLogForm))},directives:[v.L,u.O5,s._Y,s.JL,s.sg,l.KE,l.hX,T.Nt,s.Fj,s.JJ,s.u,s.Q7,h.Hw,l.R9,l.TO,s.wV,p.lW],styles:[""]}),o})()},{path:"**",component:r(1991).J}];let V=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(z)],d.Bz]}),o})();var G=r(77446),R=r(86856),X=r(48966),j=r(20773),H=r(79814),K=r(74107),W=r(84847),P=r(32075),$=r(53251),tt=r(34594),it=r(21385),ot=r(15626),et=r(5458);let rt=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[V,u.ez,s.u5,s.UX,P.p0,q.TU,l.lN,T.c,f.ZX,p.ot,L.Tx,h.Ps,X.Is,W.JX,tt.g0,H.Fk,K.LD,G.p9,R.FA,it.Ad,$.Nh,j.Cq,ot.K,et.m]]}),o})()}}]);