"use strict";(self.webpackChunkcliniva=self.webpackChunkcliniva||[]).push([[254],{41254:(O,R,i)=>{i.r(R),i.d(R,{BanquesangModule:()=>ve});var m=i(69808),x=i(1402),y=i(19186),s=i(61135),D=i(54004),k=i(70262),q=i(62843),e=i(5e3),w=i(40520);let v=(()=>{class a extends y.n{constructor(t){super(),this.httpClient=t,this.API_URL="http://localhost:8082/api/banquesang",this.isTblLoading=!1,this.dataChange=new s.X([])}get data(){return this.dataChange.value}addBanqueSang(t,o){return this.httpClient.post(`${this.API_URL}BanqueSang/${t}/BanqueSang`,o)}getDialogData(){return this.dialogData}getAllBanqueSangs(){this.subs.sink=this.httpClient.get(this.API_URL).subscribe(t=>{this.isTblLoading=!1,this.dataChange.next(t)},t=>{this.isTblLoading=!1,console.log(t.name+" "+t.message)})}getAllBanqueSangsStat(){return this.httpClient.get(this.API_URL).pipe((0,D.U)(t=>{const o=t.reduce((g,E)=>g+E.sangRetire,0);return t.map(g=>Object.assign(Object.assign({},g),{sangRetirePercentage:g.sangRetire/o*100}))}),(0,k.K)(t=>(console.log(t.name+" "+t.message),(0,q._)("Something went wrong while fetching the data."))))}retirerSang(t,o){return this.httpClient.post(`${this.API_URL}/${t}/retirerSang`,o)}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(w.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})();var b=i(86087),C=i(84847),S=i(20449),Z=i(54968),f=i(56451),p=i(48966),n=i(93075);class h{}var T=i(47423),u=i(25245),c=i(67322),l=i(77531);function _(a,d){1&a&&(e.TgZ(0,"mat-error"),e._uU(1," Medicine Name is required "),e.qZA())}function B(a,d){1&a&&(e.TgZ(0,"mat-error"),e._uU(1," Medicine Name is required "),e.qZA())}function M(a,d){1&a&&(e.TgZ(0,"mat-error"),e._uU(1," Medicine Name is required "),e.qZA())}function N(a,d){1&a&&(e.TgZ(0,"mat-error"),e._uU(1," Medicine Name is required "),e.qZA())}let U=(()=>{class a{constructor(t,o,r,g){this.dialogRef=t,this.data=o,this.Banquesangservice=r,this.fb=g,this.formControl=new n.NI("",[n.kI.required]),this.action=o.action,"edit"===this.action?(console.log(o),this.dialogTitle="modifier Donateur",this.BanqueSang=o.BanqueSang):(this.dialogTitle="New BanqueSang",this.BanqueSang=new h),this.BanqueSanglistform=this.createContactForm()}getErrorMessage(){return this.formControl.hasError("required")?"Required field":this.formControl.hasError("email")?"Not a valid email":""}createContactForm(){return this.fb.group({idBanqueSang:[this.BanqueSang.idBanqueSang],quantiteTotale:[this.BanqueSang.quantiteTotale],typeSanguin:[this.BanqueSang.typeSanguin],sangRetire:[this.BanqueSang.sangRetire]})}submit(){}onNoClick(){this.dialogRef.close()}confirmAdd(){this.BanqueSanglistform.getRawValue()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(p.so),e.Y36(p.WI),e.Y36(v),e.Y36(n.qu))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-form-dialog"]],decls:43,vars:8,consts:[[1,"addContainer"],[1,"modalHeader"],[1,"editRowModal"],[1,"modalHeader","clearfix"],[1,"modal-about"],[1,"font-weight-bold","p-t-5","font-17"],["mat-icon-button","","aria-label","Close dialog",3,"click"],["mat-dialog-content",""],[1,"register-form","m-4",3,"formGroup","ngSubmit"],[1,"row"],["appearance","outline",1,"example-full-width"],["matInput","","formControlName","idBanqueSang","required",""],[4,"ngIf"],["matInput","","formControlName","quantiteTotale","required",""],["matInput","","formControlName","typeSanguin","required",""],["matInput","","formControlName","sangRetire","required",""],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],[1,"example-button-row"],["mat-raised-button","","color","primary","type","submit",3,"disabled","mat-dialog-close","click"],["mat-raised-button","","color","warn","tabindex","-1",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._uU(6),e.qZA()()()(),e.TgZ(7,"button",6),e.NdJ("click",function(){return o.dialogRef.close()}),e.TgZ(8,"mat-icon"),e._uU(9,"close"),e.qZA()()(),e.TgZ(10,"div",7)(11,"form",8),e.NdJ("ngSubmit",function(){return o.submit}),e.TgZ(12,"div",9)(13,"mat-form-field",10)(14,"mat-label"),e._uU(15,"idBanqueSang"),e.qZA(),e._UZ(16,"input",11),e.YNc(17,_,2,0,"mat-error",12),e.qZA()(),e.TgZ(18,"div",9)(19,"mat-form-field",10)(20,"mat-label"),e._uU(21,"quantiteTotale"),e.qZA(),e._UZ(22,"input",13),e.YNc(23,B,2,0,"mat-error",12),e.qZA()(),e.TgZ(24,"div",9)(25,"mat-form-field",10)(26,"mat-label"),e._uU(27,"adresse"),e.qZA(),e._UZ(28,"input",14),e.YNc(29,M,2,0,"mat-error",12),e.qZA()(),e.TgZ(30,"div",9)(31,"mat-form-field",10)(32,"mat-label"),e._uU(33,"sangRetire"),e.qZA(),e._UZ(34,"input",15),e.YNc(35,N,2,0,"mat-error",12),e.qZA()(),e.TgZ(36,"div",9)(37,"div",16)(38,"div",17)(39,"button",18),e.NdJ("click",function(){return o.confirmAdd()}),e._uU(40,"Save"),e.qZA(),e.TgZ(41,"button",19),e.NdJ("click",function(){return o.onNoClick()}),e._uU(42,"Cancel"),e.qZA()()()()()()()),2&t&&(e.xp6(6),e.hij(" ",o.dialogTitle,""),e.xp6(5),e.Q6J("formGroup",o.BanqueSanglistform),e.xp6(6),e.Q6J("ngIf",o.BanqueSanglistform.get("idBanqueSang").hasError("required")),e.xp6(6),e.Q6J("ngIf",o.BanqueSanglistform.get("quantiteTotale").hasError("required")),e.xp6(6),e.Q6J("ngIf",o.BanqueSanglistform.get("typeSanguin").hasError("required")),e.xp6(6),e.Q6J("ngIf",o.BanqueSanglistform.get("sangRetire").hasError("required")),e.xp6(4),e.Q6J("disabled",!o.BanqueSanglistform)("mat-dialog-close",1))},directives:[T.lW,u.Hw,p.xY,n._Y,n.JL,n.sg,c.KE,c.hX,l.Nt,n.Fj,n.JJ,n.u,n.Q7,m.O5,c.TO,p.ZT],styles:[""]}),a})();var I=i(57261),P=i(41299),A=i(32075),L=i(77446),J=i(20773);const Y=["filter"];function Q(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"mat-header-cell",58)(1,"mat-checkbox",59),e.NdJ("change",function(r){e.CHM(t);const g=e.oxw();return r?g.masterToggle():null}),e.qZA()()}if(2&a){const t=e.oxw();e.Q6J("ngClass","tbl-col-width-per-6"),e.xp6(1),e.Q6J("checked",t.selection.hasValue()&&t.isAllSelected())("indeterminate",t.selection.hasValue()&&!t.isAllSelected())("ngClass","tbl-checkbox")}}function W(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"mat-cell",58)(1,"mat-checkbox",60),e.NdJ("click",function(r){return r.stopPropagation()})("change",function(r){const E=e.CHM(t).$implicit,F=e.oxw();return r?F.selection.toggle(E):null}),e.qZA()()}if(2&a){const t=d.$implicit,o=e.oxw();e.Q6J("ngClass","tbl-col-width-per-6"),e.xp6(1),e.Q6J("checked",o.selection.isSelected(t))("ngClass","tbl-checkbox")}}function j(a,d){1&a&&e._UZ(0,"mat-header-cell",61),2&a&&e.Q6J("ngClass","tbl-col-width-per-6")}function V(a,d){if(1&a&&(e.TgZ(0,"mat-cell",58),e._uU(1),e.qZA()),2&a){const t=d.$implicit;e.Q6J("ngClass","tbl-col-width-per-6"),e.xp6(1),e.hij(" ",t.idBanqueSang,"")}}function z(a,d){1&a&&(e.TgZ(0,"mat-header-cell",61),e._uU(1,"quantite totale "),e.qZA()),2&a&&e.Q6J("ngClass","tbl-col-width-per-100")}function X(a,d){if(1&a&&(e.TgZ(0,"mat-cell")(1,"span",62),e._uU(2),e.qZA()()),2&a){const t=d.$implicit;e.xp6(1),e.Q6J("ngClass","tbl-col-width-per-80"),e.xp6(1),e.Oqu(t.quantiteTotale)}}function H(a,d){1&a&&(e.TgZ(0,"mat-header-cell",61),e._uU(1,"type Sanguin "),e.qZA()),2&a&&e.Q6J("ngClass","tbl-col-width-per-100")}function $(a,d){if(1&a&&(e.TgZ(0,"mat-cell")(1,"span",62),e._uU(2),e.qZA()()),2&a){const t=d.$implicit;e.xp6(1),e.Q6J("ngClass","tbl-col-width-per-80"),e.xp6(1),e.Oqu(t.typeSanguin)}}function K(a,d){1&a&&(e.TgZ(0,"mat-header-cell",63),e._uU(1,"sang Retire"),e.qZA())}function G(a,d){if(1&a&&(e.TgZ(0,"mat-cell"),e._uU(1),e.qZA()),2&a){const t=d.$implicit;e.xp6(1),e.hij(" ",t.sangRetire,"")}}function ee(a,d){1&a&&e._UZ(0,"mat-header-row")}function te(a,d){if(1&a){const t=e.EpF();e.TgZ(0,"mat-row",64),e.NdJ("click",function(){const g=e.CHM(t).$implicit;return e.oxw().editCall(g)}),e.qZA()}2&a&&e.Udp("cursor","pointer")}function ne(a,d){if(1&a&&(e.TgZ(0,"li",65),e._uU(1),e.TgZ(2,"div",66)(3,"div",67),e._uU(4),e.ALo(5,"number"),e.qZA()()()),2&a){const t=d.$implicit;e.xp6(1),e.hij(" ",t.typeSanguin," "),e.xp6(2),e.Udp("width",t.sangRetirePercentage,"%"),e.uIk("aria-valuenow",t.sangRetirePercentage),e.xp6(1),e.hij("",e.xi3(5,5,t.sangRetirePercentage,"1.0-2"),"% ")}}function ae(a,d){1&a&&(e.TgZ(0,"div",68),e._UZ(1,"mat-progress-spinner",69),e.qZA()),2&a&&(e.xp6(1),e.Q6J("diameter",40))}function oe(a,d){if(1&a&&(e.TgZ(0,"div",70),e._uU(1," No results "),e.qZA()),2&a){const t=e.oxw();e.Udp("display",0==t.dataSource.renderedData.length?"":"none")}}const ie=function(){return[5,10,25,100]};let re=(()=>{class a extends y.n{constructor(t,o,r,g){super(),this.httpClient=t,this.dialog=o,this.Banquesangservice=r,this.snackBar=g,this.displayedColumns=["select","idBanqueSang","category","company","sang"],this.selection=new S.Ov(!0,[]),this.sangRetireTotal=0,this.banques=[]}ngOnInit(){this.loadData(),this.Banquesangservice.getAllBanqueSangsStat().subscribe(t=>{this.banques=t,this.getSangRetirePercentages()})}refresh(){this.loadData()}getSangRetirePercentages(){this.Banquesangservice.getAllBanqueSangsStat().subscribe(t=>{const o=t.reduce((r,g)=>r+g.sangRetire,0);this.banques=t.map(r=>Object.assign(Object.assign({},r),{sangRetirePercentage:r.sangRetire/o*100}))})}retirerSang(){this.Banquesangservice.retirerSang(this.idBanqueSang,{quantiteSangRetiree:this.quantiteSangRetiree}).subscribe(o=>console.log(o),o=>console.error(o))}calculateMostBlood(t){const o=t.reduce((g,E)=>g+E.sangRetire,0),r={};for(const g of t){const E=Math.round(g.sangRetire/o*100);r[g.typeSang]=E}return r}addNew(){let t;t="true"===localStorage.getItem("isRtl")?"rtl":"ltr";const o=this.dialog.open(U,{data:{BanqueSang:this.BanqueSang,action:"add"},direction:t});this.subs.sink=o.afterClosed().subscribe(r=>{1===r&&(this.exampleDatabase.dataChange.value.unshift(this.Banquesangservice.getDialogData()),this.refreshTable(),this.showNotification("snackbar-success","Add Record Successfully...!!!","bottom","center"))})}refreshTable(){this.paginator._changePageSize(this.paginator.pageSize)}loadData(){this.exampleDatabase=new v(this.httpClient),this.dataSource=new se(this.exampleDatabase,this.paginator,this.sort),this.subs.sink=(0,Z.R)(this.filter.nativeElement,"keyup").subscribe(()=>{!this.dataSource||(this.dataSource.filter=this.filter.nativeElement.value)})}showNotification(t,o,r,g){this.snackBar.open(o,"",{duration:2e3,verticalPosition:r,horizontalPosition:g,panelClass:t})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(w.eN),e.Y36(p.uw),e.Y36(v),e.Y36(I.ux))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-banques"]],viewQuery:function(t,o){if(1&t&&(e.Gf(b.NW,7),e.Gf(C.YE,7),e.Gf(Y,7)),2&t){let r;e.iGM(r=e.CRH())&&(o.paginator=r.first),e.iGM(r=e.CRH())&&(o.sort=r.first),e.iGM(r=e.CRH())&&(o.filter=r.first)}},features:[e.qOj],decls:75,vars:15,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","active_item"],[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"body"],[1,"table-responsive"],[1,"materialTableHeader"],[1,"col-8"],[1,"header-buttons-left","ms-0"],[1,"dropdown","m-l-20"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field"],["filter",""],[1,"col-4"],[1,"header-buttons"],[1,"icon-button-demo"],["mat-mini-fab","","color","primary",3,"click"],[1,"col-white"],["matSort","",1,"mat-cell",3,"dataSource"],["table",""],["matColumnDef","select"],[3,"ngClass",4,"matHeaderCellDef"],[3,"ngClass",4,"matCellDef"],["matColumnDef","idBanqueSang"],["mat-sort-header","",3,"ngClass",4,"matHeaderCellDef"],["matColumnDef","company"],[4,"matCellDef"],["matColumnDef","category"],["matColumnDef","sang"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matHeaderRowDef"],["matRipple","",3,"cursor","click",4,"matRowDef","matRowDefColumns"],[1,"d-flex","justify-content-center","align-items-center",2,"height","70vh"],[1,"col-md-6"],[1,"card-header"],[1,"card-title"],[1,"card-body","custom-card-body"],[3,"ngSubmit"],["form","ngForm"],[1,"mb-2"],["for","idBanqueSang",1,"form-label"],["type","number","id","idBanqueSang","name","idBanqueSang",1,"form-control",3,"ngModel","ngModelChange"],[1,"mb-3"],["for","quantiteSangRetiree",1,"form-label"],["type","number","id","quantiteSangRetiree","name","quantiteSangRetiree",1,"form-control",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary",1,"w-100","mt-3"],[1,"card-body"],[1,"card-title",2,"color","black"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],["class","tbl-spinner",4,"ngIf"],["class","no-results",3,"display",4,"ngIf"],[3,"length","pageIndex","pageSize","pageSizeOptions"],["paginator",""],[3,"ngClass"],[3,"checked","indeterminate","ngClass","change"],[3,"checked","ngClass","click","change"],["mat-sort-header","",3,"ngClass"],[1,"truncate-text",3,"ngClass"],["mat-sort-header",""],["matRipple","",3,"click"],[1,"list-group-item"],[1,"progress","shadow-style"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","l-bg-orange","width-per-74"],[1,"tbl-spinner"],["color","primary","mode","indeterminate",3,"diameter"],[1,"no-results"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-breadcrumb",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",4)(11,"div",10)(12,"ul",11)(13,"li",12)(14,"label",13)(15,"i",14),e._uU(16,"search"),e.qZA()(),e._UZ(17,"input",15,16),e.qZA()()(),e.TgZ(19,"div",17)(20,"ul",18)(21,"li")(22,"div",19)(23,"button",20),e.NdJ("click",function(){return o.refresh()}),e.TgZ(24,"mat-icon",21),e._uU(25,"refresh"),e.qZA()()()()()()()(),e.TgZ(26,"mat-table",22,23),e.ynx(28,24),e.YNc(29,Q,2,4,"mat-header-cell",25),e.YNc(30,W,2,3,"mat-cell",26),e.BQk(),e.ynx(31,27),e.YNc(32,j,1,1,"mat-header-cell",28),e.YNc(33,V,2,2,"mat-cell",26),e.BQk(),e.ynx(34,29),e.YNc(35,z,2,1,"mat-header-cell",28),e.YNc(36,X,3,2,"mat-cell",30),e.BQk(),e.ynx(37,31),e.YNc(38,H,2,1,"mat-header-cell",28),e.YNc(39,$,3,2,"mat-cell",30),e.BQk(),e.ynx(40,32),e.YNc(41,K,2,0,"mat-header-cell",33),e.YNc(42,G,2,1,"mat-cell",30),e.BQk(),e.YNc(43,ee,1,0,"mat-header-row",34),e.YNc(44,te,1,2,"mat-row",35),e.qZA(),e.TgZ(45,"div",36)(46,"div",37)(47,"div",6)(48,"div",38)(49,"h4",39),e._uU(50,"Retirer Sang"),e.qZA()(),e.TgZ(51,"div",40)(52,"form",41,42),e.NdJ("ngSubmit",function(){return o.retirerSang()}),e.TgZ(54,"div",43)(55,"label",44),e._uU(56,"Num\xe9ro Banque Sang"),e.qZA(),e.TgZ(57,"input",45),e.NdJ("ngModelChange",function(g){return o.idBanqueSang=g}),e.qZA()(),e.TgZ(58,"div",46)(59,"label",47),e._uU(60,"Quantite a retirer"),e.qZA(),e.TgZ(61,"input",48),e.NdJ("ngModelChange",function(g){return o.quantiteSangRetiree=g}),e.qZA()(),e.TgZ(62,"button",49),e._uU(63,"Retirer Sang"),e.qZA()()()()(),e.TgZ(64,"div",37)(65,"div",6)(66,"div",50)(67,"h5",51),e._uU(68,"Sang Retir\xe9 Statistics"),e.qZA(),e.TgZ(69,"ul",52),e.YNc(70,ne,6,8,"li",53),e.qZA()()()()(),e.YNc(71,ae,2,1,"div",54),e.YNc(72,oe,2,2,"div",55),e._UZ(73,"mat-paginator",56,57),e.qZA()()()()()()()),2&t&&(e.xp6(3),e.Q6J("title","BanqueSang")("active_item","Type sanguin et Quantit\xe9 disponible "),e.xp6(23),e.Q6J("dataSource",o.dataSource),e.xp6(17),e.Q6J("matHeaderRowDef",o.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",o.displayedColumns),e.xp6(13),e.Q6J("ngModel",o.idBanqueSang),e.xp6(4),e.Q6J("ngModel",o.quantiteSangRetiree),e.xp6(9),e.Q6J("ngForOf",o.banques),e.xp6(1),e.Q6J("ngIf",o.exampleDatabase.isTblLoading),e.xp6(1),e.Q6J("ngIf",!o.exampleDatabase.isTblLoading),e.xp6(1),e.Q6J("length",o.dataSource.filteredData.length)("pageIndex",0)("pageSize",10)("pageSizeOptions",e.DdM(14,ie)))},directives:[P.L,T.lW,u.Hw,A.BZ,C.YE,A.w1,A.fO,A.ge,m.mk,L.oG,A.Dz,A.ev,C.nU,A.as,A.XQ,A.nj,A.Gk,n._Y,n.JL,n.F,n.wV,n.Fj,n.JJ,n.On,m.sg,m.O5,J.Ou,b.NW],pipes:[m.JJ],styles:[""]}),a})();class se extends S.o2{constructor(d,t,o){super(),this.exampleDatabase=d,this.paginator=t,this._sort=o,this.filterChange=new s.X(""),this.filteredData=[],this.renderedData=[],this.filterChange.subscribe(()=>this.paginator.pageIndex=0)}get filter(){return this.filterChange.value}set filter(d){this.filterChange.next(d)}connect(){const d=[this.exampleDatabase.dataChange,this._sort.sortChange,this.filterChange,this.paginator.page];return this.exampleDatabase.getAllBanqueSangs(),(0,f.T)(...d).pipe((0,D.U)(()=>{this.filteredData=this.exampleDatabase.data.slice().filter(r=>-1!==(r.idBanqueSang+r.typeSanguin+r.quantiteTotale+r.sangRetire).toLowerCase().indexOf(this.filter.toLowerCase()));const t=this.sortData(this.filteredData.slice());return this.renderedData=t.splice(this.paginator.pageIndex*this.paginator.pageSize,this.paginator.pageSize),this.renderedData}))}disconnect(){}sortData(d){return this._sort.active&&""!==this._sort.direction?d.sort((t,o)=>{let r="",g="";switch(this._sort.active){case"idBanqueSang":[r,g]=[t.idBanqueSang,o.idBanqueSang];break;case"m_no":case"typesanguin":[r,g]=[t.typeSanguin,o.typeSanguin];break;case"m_name":[r,g]=[t.quantiteTotale,o.quantiteTotale]}return((isNaN(+r)?r:+r)<(isNaN(+g)?g:+g)?-1:1)*("asc"===this._sort.direction?1:-1)}):d}}const de=[{path:"afficherbanque",component:re},{path:"**",component:i(1991).J}];let ce=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[x.Bz.forChild(de)],x.Bz]}),a})();var me=i(5458),ue=i(15626),ge=i(74107),he=i(34594),fe=i(86856),pe=i(79814),_e=i(21385);let ve=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[v],imports:[[m.ez,ce,J.Cq,_e.Ad,L.p9,pe.Fk,A.p0,b.TU,c.lN,l.c,I.ZX,T.ot,u.Ps,p.Is,C.JX,he.g0,ge.LD,fe.FA,me.m,ue.K,n.u5,n.UX,u.Ps,l.c]]}),a})()},20773:(O,R,i)=>{i.d(R,{Ou:()=>n,Cq:()=>h});var m=i(63191),x=i(70925),y=i(69808),s=i(5e3),D=i(90508),k=i(76360),q=i(50727),e=i(29071);function w(u,c){if(1&u&&(s.O4$(),s._UZ(0,"circle",4)),2&u){const l=s.oxw(),_=s.MAs(1);s.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+l._spinnerAnimationLabel)("stroke-dashoffset",l._getStrokeDashOffset(),"px")("stroke-dasharray",l._getStrokeCircumference(),"px")("stroke-width",l._getCircleStrokeWidth(),"%")("transform-origin",l._getCircleTransformOrigin(_)),s.uIk("r",l._getCircleRadius())}}function v(u,c){if(1&u&&(s.O4$(),s._UZ(0,"circle",4)),2&u){const l=s.oxw(),_=s.MAs(1);s.Udp("stroke-dashoffset",l._getStrokeDashOffset(),"px")("stroke-dasharray",l._getStrokeCircumference(),"px")("stroke-width",l._getCircleStrokeWidth(),"%")("transform-origin",l._getCircleTransformOrigin(_)),s.uIk("r",l._getCircleRadius())}}const S=(0,D.pj)(class{constructor(u){this._elementRef=u}},"primary"),Z=new s.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function f(){return{diameter:100}}});class n extends S{constructor(c,l,_,B,M,N,U,I){super(c),this._document=_,this._diameter=100,this._value=0,this._resizeSubscription=q.w0.EMPTY,this.mode="determinate";const P=n._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),P.has(_.head)||P.set(_.head,new Set([100])),this._noopAnimations="NoopAnimations"===B&&!!M&&!M._forceAnimations,"mat-spinner"===c.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),M&&(M.diameter&&(this.diameter=M.diameter),M.strokeWidth&&(this.strokeWidth=M.strokeWidth)),l.isBrowser&&l.SAFARI&&U&&N&&I&&(this._resizeSubscription=U.change(150).subscribe(()=>{"indeterminate"===this.mode&&I.run(()=>N.markForCheck())}))}get diameter(){return this._diameter}set diameter(c){this._diameter=(0,m.su)(c),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(c){this._strokeWidth=(0,m.su)(c)}get value(){return"determinate"===this.mode?this._value:0}set value(c){this._value=Math.max(0,Math.min(100,(0,m.su)(c)))}ngOnInit(){const c=this._elementRef.nativeElement;this._styleRoot=(0,x.kV)(c)||this._document.head,this._attachStyleNode(),c.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const c=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${c} ${c}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(c){var l;const _=50*(null!==(l=c.currentScale)&&void 0!==l?l:1);return`${_}% ${_}%`}_attachStyleNode(){const c=this._styleRoot,l=this._diameter,_=n._diameters;let B=_.get(c);if(!B||!B.has(l)){const M=this._document.createElement("style");M.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),M.textContent=this._getAnimationText(),c.appendChild(M),B||(B=new Set,_.set(c,B)),B.add(l)}}_getAnimationText(){const c=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*c).replace(/END_VALUE/g,""+.2*c).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}n._diameters=new WeakMap,n.\u0275fac=function(c){return new(c||n)(s.Y36(s.SBq),s.Y36(x.t4),s.Y36(y.K0,8),s.Y36(k.Qb,8),s.Y36(Z),s.Y36(s.sBO),s.Y36(e.rL),s.Y36(s.R0b))},n.\u0275cmp=s.Xpm({type:n,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(c,l){2&c&&(s.uIk("aria-valuemin","determinate"===l.mode?0:null)("aria-valuemax","determinate"===l.mode?100:null)("aria-valuenow","determinate"===l.mode?l.value:null)("mode",l.mode),s.Udp("width",l.diameter,"px")("height",l.diameter,"px"),s.ekj("_mat-animation-noopable",l._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[s.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(c,l){1&c&&(s.O4$(),s.TgZ(0,"svg",0,1),s.YNc(2,w,1,11,"circle",2),s.YNc(3,v,1,9,"circle",3),s.qZA()),2&c&&(s.Udp("width",l.diameter,"px")("height",l.diameter,"px"),s.Q6J("ngSwitch","indeterminate"===l.mode),s.uIk("viewBox",l._getViewBox()),s.xp6(2),s.Q6J("ngSwitchCase",!0),s.xp6(1),s.Q6J("ngSwitchCase",!1))},directives:[y.RF,y.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n"],encapsulation:2,changeDetection:0});let h=(()=>{class u{}return u.\u0275fac=function(l){return new(l||u)},u.\u0275mod=s.oAB({type:u}),u.\u0275inj=s.cJS({imports:[[D.BQ,y.ez],D.BQ]}),u})()},34594:(O,R,i)=>{i.d(R,{g0:()=>w});var m=i(5e3),x=i(90508);let w=(()=>{class v{}return v.\u0275fac=function(C){return new(C||v)},v.\u0275mod=m.oAB({type:v}),v.\u0275inj=m.cJS({imports:[[x.BQ],x.BQ]}),v})()},21385:(O,R,i)=>{i.d(R,{Yh:()=>v,Ad:()=>S});var m=i(5e3),x=i(15664),y=i(67322),s=i(63191),D=i(90508),k=i(93075);class q{constructor(p,n=", "){this._files=p,this.delimiter=n,this._fileNames=(this._files||[]).map(h=>h.name).join(n)}get files(){return this._files||[]}get fileNames(){return this._fileNames}}const w=(0,D.FD)(class e{constructor(p,n,h,T){this._defaultErrorStateMatcher=p,this._parentForm=n,this._parentFormGroup=h,this.ngControl=T}});let v=(()=>{class f extends w{constructor(n,h,T,u,c,l,_){super(u,l,_,c),this.fm=n,this._elementRef=h,this._renderer=T,this._defaultErrorStateMatcher=u,this.ngControl=c,this._parentForm=l,this._parentFormGroup=_,this.focused=!1,this.controlType="file-input",this.autofilled=!1,this._required=!1,this.accept=null,this.id="ngx-mat-file-input-"+f.nextId++,this.describedBy="",this._onChange=B=>{},this._onTouched=()=>{},null!=this.ngControl&&(this.ngControl.valueAccessor=this),n.monitor(h.nativeElement,!0).subscribe(B=>{this.focused=!!B,this.stateChanges.next()})}setDescribedByIds(n){this.describedBy=n.join(" ")}get value(){return this.empty?null:new q(this._elementRef.nativeElement.value||[])}set value(n){n&&(this.writeValue(n),this.stateChanges.next())}get multiple(){return this._multiple}set multiple(n){this._multiple=(0,s.Ig)(n),this.stateChanges.next()}get placeholder(){return this._placeholder}set placeholder(n){this._placeholder=n,this.stateChanges.next()}get empty(){return!this._elementRef.nativeElement.value||0===this._elementRef.nativeElement.value.length}get shouldLabelFloat(){return this.focused||!this.empty||void 0!==this.valuePlaceholder}get required(){return this._required}set required(n){this._required=(0,s.Ig)(n),this.stateChanges.next()}get isDisabled(){return this.disabled}get disabled(){return this._elementRef.nativeElement.disabled}set disabled(n){this.setDisabledState((0,s.Ig)(n)),this.stateChanges.next()}onContainerClick(n){"input"!==n.target.tagName.toLowerCase()&&!this.disabled&&(this._elementRef.nativeElement.querySelector("input").focus(),this.focused=!0,this.open())}get fileNames(){return this.value?this.value.fileNames:this.valuePlaceholder}writeValue(n){this._renderer.setProperty(this._elementRef.nativeElement,"value",n instanceof q?n.files:null)}registerOnChange(n){this._onChange=n}registerOnTouched(n){this._onTouched=n}clear(n){n&&(n.preventDefault(),n.stopPropagation()),this.value=new q([]),this._elementRef.nativeElement.querySelector("input").value=null,this._onChange(this.value)}change(n){const h=n.target.files,T=[];if(h)for(let u=0;u<h.length;u++)T.push(h[u]);this.value=new q(T),this._onChange(this.value)}blur(){this.focused=!1,this._onTouched()}setDisabledState(n){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",n)}ngOnInit(){this.multiple=(0,s.Ig)(this.multiple)}open(){this.disabled||this._elementRef.nativeElement.querySelector("input").click()}ngOnDestroy(){this.stateChanges.complete(),this.fm.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState()}}return f.nextId=0,f.\u0275fac=function(n){return new(n||f)(m.Y36(x.tE),m.Y36(m.SBq),m.Y36(m.Qsj),m.Y36(D.rD),m.Y36(k.a5,10),m.Y36(k.F,8),m.Y36(k.sg,8))},f.\u0275cmp=m.Xpm({type:f,selectors:[["ngx-mat-file-input"]],hostVars:6,hostBindings:function(n,h){1&n&&m.NdJ("change",function(u){return h.change(u)})("focusout",function(){return h.blur()}),2&n&&(m.Ikx("id",h.id),m.uIk("aria-describedby",h.describedBy),m.ekj("mat-form-field-should-float",h.shouldLabelFloat)("file-input-disabled",h.isDisabled))},inputs:{autofilled:"autofilled",valuePlaceholder:"valuePlaceholder",accept:"accept",errorStateMatcher:"errorStateMatcher",value:"value",multiple:"multiple",placeholder:"placeholder",required:"required",disabled:"disabled"},features:[m._Bn([{provide:y.Eo,useExisting:f}]),m.qOj],decls:4,vars:4,consts:[["type","file"],["input",""],[1,"filename",3,"title"]],template:function(n,h){1&n&&(m._UZ(0,"input",0,1),m.TgZ(2,"span",2),m._uU(3),m.qZA()),2&n&&(m.uIk("multiple",h.multiple?"":null)("accept",h.accept),m.xp6(2),m.Q6J("title",h.fileNames),m.xp6(1),m.Oqu(h.fileNames))},styles:["[_nghost-%COMP%]{display:inline-block;width:100%}[_nghost-%COMP%]:not(.file-input-disabled){cursor:pointer}input[_ngcontent-%COMP%]{width:0px;height:0px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;overflow:hidden;width:100%}"]}),f})();new m.OlP("ngx-mat-file-input.config");let S=(()=>{class f{}return f.\u0275fac=function(n){return new(n||f)},f.\u0275mod=m.oAB({type:f}),f.\u0275inj=m.cJS({providers:[x.tE]}),f})()}}]);