"use strict";(self.webpackChunkcliniva=self.webpackChunkcliniva||[]).push([[893],{58493:(k,b,s)=>{s.d(b,{Z:()=>p});const p={headers:new(s(40520).WM)({"Content-Type":"application/json"})}},82848:(k,b,s)=>{s.d(b,{G:()=>t});var r=s(58493),_=s(5e3),p=s(40520);let t=(()=>{class h{constructor(l){this.http=l,this.apiUrl="http://localhost:8082/api/logistiques"}getAllLogistiques(){return this.http.get(`${this.apiUrl}`)}getLogistiqueById(l){return this.http.get(`${this.apiUrl}/${l}`)}addLogistique(l){return this.http.post(`${this.apiUrl}`,l,r.Z)}updateLogistique(l){return this.http.put(`${this.apiUrl}`,l,r.Z)}deleteLogistique(l){return this.http.delete(`${this.apiUrl}/${l}`)}searchLogistiqueByType(l){return this.http.get(`${this.apiUrl}/type/${l}`)}getLogistiquesByOperation(l){return this.http.get(`${this.apiUrl}/operation/${l}`)}}return h.\u0275fac=function(l){return new(l||h)(_.LFG(p.eN))},h.\u0275prov=_.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},20773:(k,b,s)=>{s.d(b,{Ou:()=>e,Cq:()=>a});var r=s(63191),_=s(70925),p=s(69808),t=s(5e3),h=s(90508),y=s(76360),l=s(50727),C=s(29071);function A(n,i){if(1&n&&(t.O4$(),t._UZ(0,"circle",4)),2&n){const o=t.oxw(),c=t.MAs(1);t.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+o._spinnerAnimationLabel)("stroke-dashoffset",o._getStrokeDashOffset(),"px")("stroke-dasharray",o._getStrokeCircumference(),"px")("stroke-width",o._getCircleStrokeWidth(),"%")("transform-origin",o._getCircleTransformOrigin(c)),t.uIk("r",o._getCircleRadius())}}function u(n,i){if(1&n&&(t.O4$(),t._UZ(0,"circle",4)),2&n){const o=t.oxw(),c=t.MAs(1);t.Udp("stroke-dashoffset",o._getStrokeDashOffset(),"px")("stroke-dasharray",o._getStrokeCircumference(),"px")("stroke-width",o._getCircleStrokeWidth(),"%")("transform-origin",o._getCircleTransformOrigin(c)),t.uIk("r",o._getCircleRadius())}}const T=(0,h.pj)(class{constructor(n){this._elementRef=n}},"primary"),D=new t.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function d(){return{diameter:100}}});class e extends T{constructor(i,o,c,E,v,P,x,O){super(i),this._document=c,this._diameter=100,this._value=0,this._resizeSubscription=l.w0.EMPTY,this.mode="determinate";const R=e._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),R.has(c.head)||R.set(c.head,new Set([100])),this._noopAnimations="NoopAnimations"===E&&!!v&&!v._forceAnimations,"mat-spinner"===i.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),v&&(v.diameter&&(this.diameter=v.diameter),v.strokeWidth&&(this.strokeWidth=v.strokeWidth)),o.isBrowser&&o.SAFARI&&x&&P&&O&&(this._resizeSubscription=x.change(150).subscribe(()=>{"indeterminate"===this.mode&&O.run(()=>P.markForCheck())}))}get diameter(){return this._diameter}set diameter(i){this._diameter=(0,r.su)(i),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(i){this._strokeWidth=(0,r.su)(i)}get value(){return"determinate"===this.mode?this._value:0}set value(i){this._value=Math.max(0,Math.min(100,(0,r.su)(i)))}ngOnInit(){const i=this._elementRef.nativeElement;this._styleRoot=(0,_.kV)(i)||this._document.head,this._attachStyleNode(),i.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const i=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${i} ${i}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(i){var o;const c=50*(null!==(o=i.currentScale)&&void 0!==o?o:1);return`${c}% ${c}%`}_attachStyleNode(){const i=this._styleRoot,o=this._diameter,c=e._diameters;let E=c.get(i);if(!E||!E.has(o)){const v=this._document.createElement("style");v.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),v.textContent=this._getAnimationText(),i.appendChild(v),E||(E=new Set,c.set(i,E)),E.add(o)}}_getAnimationText(){const i=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*i).replace(/END_VALUE/g,""+.2*i).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}e._diameters=new WeakMap,e.\u0275fac=function(i){return new(i||e)(t.Y36(t.SBq),t.Y36(_.t4),t.Y36(p.K0,8),t.Y36(y.Qb,8),t.Y36(D),t.Y36(t.sBO),t.Y36(C.rL),t.Y36(t.R0b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(i,o){2&i&&(t.uIk("aria-valuemin","determinate"===o.mode?0:null)("aria-valuemax","determinate"===o.mode?100:null)("aria-valuenow","determinate"===o.mode?o.value:null)("mode",o.mode),t.Udp("width",o.diameter,"px")("height",o.diameter,"px"),t.ekj("_mat-animation-noopable",o._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[t.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(i,o){1&i&&(t.O4$(),t.TgZ(0,"svg",0,1),t.YNc(2,A,1,11,"circle",2),t.YNc(3,u,1,9,"circle",3),t.qZA()),2&i&&(t.Udp("width",o.diameter,"px")("height",o.diameter,"px"),t.Q6J("ngSwitch","indeterminate"===o.mode),t.uIk("viewBox",o._getViewBox()),t.xp6(2),t.Q6J("ngSwitchCase",!0),t.xp6(1),t.Q6J("ngSwitchCase",!1))},directives:[p.RF,p.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}\n"],encapsulation:2,changeDetection:0});let a=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[h.BQ,p.ez],h.BQ]}),n})()},34594:(k,b,s)=>{s.d(b,{g0:()=>A});var r=s(5e3),_=s(90508);let A=(()=>{class u{}return u.\u0275fac=function(g){return new(g||u)},u.\u0275mod=r.oAB({type:u}),u.\u0275inj=r.cJS({imports:[[_.BQ],_.BQ]}),u})()},21385:(k,b,s)=>{s.d(b,{Yh:()=>u,Ad:()=>T});var r=s(5e3),_=s(15664),p=s(67322),t=s(63191),h=s(90508),y=s(93075);class l{constructor(m,e=", "){this._files=m,this.delimiter=e,this._fileNames=(this._files||[]).map(a=>a.name).join(e)}get files(){return this._files||[]}get fileNames(){return this._fileNames}}const A=(0,h.FD)(class C{constructor(m,e,a,M){this._defaultErrorStateMatcher=m,this._parentForm=e,this._parentFormGroup=a,this.ngControl=M}});let u=(()=>{class d extends A{constructor(e,a,M,n,i,o,c){super(n,o,c,i),this.fm=e,this._elementRef=a,this._renderer=M,this._defaultErrorStateMatcher=n,this.ngControl=i,this._parentForm=o,this._parentFormGroup=c,this.focused=!1,this.controlType="file-input",this.autofilled=!1,this._required=!1,this.accept=null,this.id="ngx-mat-file-input-"+d.nextId++,this.describedBy="",this._onChange=E=>{},this._onTouched=()=>{},null!=this.ngControl&&(this.ngControl.valueAccessor=this),e.monitor(a.nativeElement,!0).subscribe(E=>{this.focused=!!E,this.stateChanges.next()})}setDescribedByIds(e){this.describedBy=e.join(" ")}get value(){return this.empty?null:new l(this._elementRef.nativeElement.value||[])}set value(e){e&&(this.writeValue(e),this.stateChanges.next())}get multiple(){return this._multiple}set multiple(e){this._multiple=(0,t.Ig)(e),this.stateChanges.next()}get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}get empty(){return!this._elementRef.nativeElement.value||0===this._elementRef.nativeElement.value.length}get shouldLabelFloat(){return this.focused||!this.empty||void 0!==this.valuePlaceholder}get required(){return this._required}set required(e){this._required=(0,t.Ig)(e),this.stateChanges.next()}get isDisabled(){return this.disabled}get disabled(){return this._elementRef.nativeElement.disabled}set disabled(e){this.setDisabledState((0,t.Ig)(e)),this.stateChanges.next()}onContainerClick(e){"input"!==e.target.tagName.toLowerCase()&&!this.disabled&&(this._elementRef.nativeElement.querySelector("input").focus(),this.focused=!0,this.open())}get fileNames(){return this.value?this.value.fileNames:this.valuePlaceholder}writeValue(e){this._renderer.setProperty(this._elementRef.nativeElement,"value",e instanceof l?e.files:null)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}clear(e){e&&(e.preventDefault(),e.stopPropagation()),this.value=new l([]),this._elementRef.nativeElement.querySelector("input").value=null,this._onChange(this.value)}change(e){const a=e.target.files,M=[];if(a)for(let n=0;n<a.length;n++)M.push(a[n]);this.value=new l(M),this._onChange(this.value)}blur(){this.focused=!1,this._onTouched()}setDisabledState(e){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",e)}ngOnInit(){this.multiple=(0,t.Ig)(this.multiple)}open(){this.disabled||this._elementRef.nativeElement.querySelector("input").click()}ngOnDestroy(){this.stateChanges.complete(),this.fm.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState()}}return d.nextId=0,d.\u0275fac=function(e){return new(e||d)(r.Y36(_.tE),r.Y36(r.SBq),r.Y36(r.Qsj),r.Y36(h.rD),r.Y36(y.a5,10),r.Y36(y.F,8),r.Y36(y.sg,8))},d.\u0275cmp=r.Xpm({type:d,selectors:[["ngx-mat-file-input"]],hostVars:6,hostBindings:function(e,a){1&e&&r.NdJ("change",function(n){return a.change(n)})("focusout",function(){return a.blur()}),2&e&&(r.Ikx("id",a.id),r.uIk("aria-describedby",a.describedBy),r.ekj("mat-form-field-should-float",a.shouldLabelFloat)("file-input-disabled",a.isDisabled))},inputs:{autofilled:"autofilled",valuePlaceholder:"valuePlaceholder",accept:"accept",errorStateMatcher:"errorStateMatcher",value:"value",multiple:"multiple",placeholder:"placeholder",required:"required",disabled:"disabled"},features:[r._Bn([{provide:p.Eo,useExisting:d}]),r.qOj],decls:4,vars:4,consts:[["type","file"],["input",""],[1,"filename",3,"title"]],template:function(e,a){1&e&&(r._UZ(0,"input",0,1),r.TgZ(2,"span",2),r._uU(3),r.qZA()),2&e&&(r.uIk("multiple",a.multiple?"":null)("accept",a.accept),r.xp6(2),r.Q6J("title",a.fileNames),r.xp6(1),r.Oqu(a.fileNames))},styles:["[_nghost-%COMP%]{display:inline-block;width:100%}[_nghost-%COMP%]:not(.file-input-disabled){cursor:pointer}input[_ngcontent-%COMP%]{width:0px;height:0px;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename[_ngcontent-%COMP%]{display:inline-block;text-overflow:ellipsis;overflow:hidden;width:100%}"]}),d})();new r.OlP("ngx-mat-file-input.config");let T=(()=>{class d{}return d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=r.oAB({type:d}),d.\u0275inj=r.cJS({providers:[_.tE]}),d})()}}]);