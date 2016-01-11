/*! grafana - v2.6.0 - 2015-12-14
 * Copyright (c) 2015 Torkel Ödegaard; Licensed Apache-2.0 */

define(["require","exports","lodash","app/features/panel/panel_meta","./transformers"],function(a,b,c,d,e){var f=function(){function a(a,b,f,g,h,i){a.ctrl=this,a.pageIndex=0,a.panelMeta=new d({panelName:"Table",editIcon:"fa fa-table",fullscreen:!0,metricsEditor:!0}),a.panelMeta.addEditorTab("Options","app/panels/table/options.html"),a.panelMeta.addEditorTab("Time range","app/features/panel/partials/panelTime.html");var j={targets:[{}],transform:"timeseries_to_columns",pageSize:null,showHeader:!0,styles:[{type:"date",pattern:"Time",dateFormat:"YYYY-MM-DD HH:mm:ss"},{unit:"short",type:"number",decimals:2,colors:["rgba(245, 54, 54, 0.9)","rgba(237, 129, 40, 0.89)","rgba(50, 172, 45, 0.97)"],colorMode:null,pattern:"/.*/",thresholds:[]}],columns:[],scroll:!0,fontSize:"100%",sort:{col:0,desc:!0}};a.init=function(){void 0===a.panel.styles&&(a.panel.styles=a.panel.columns,a.panel.columns=a.panel.fields,delete a.panel.columns,delete a.panel.fields),c.defaults(a.panel,j),g.init(a)},a.refreshData=function(b){return h.updateTimeRange(a),a.pageIndex=0,"annotations"===a.panel.transform?i.getAnnotations(a.dashboard).then(function(b){a.dataRaw=b,a.render()}):h.issueMetricQuery(a,b).then(a.dataHandler,function(b){throw a.render(),b})},a.toggleColumnSort=function(b,c){a.panel.sort.col===c?a.panel.sort.desc?a.panel.sort.desc=!1:a.panel.sort.col=null:(a.panel.sort.col=c,a.panel.sort.desc=!0),a.render()},a.dataHandler=function(b){a.dataRaw=b.data,a.pageIndex=0,a.render()},a.render=function(){a.dataRaw&&a.dataRaw.length&&("table"===a.dataRaw[0].type?a.panel.transform="table":"docs"===a.dataRaw[0].type?a.panel.transform="json":("table"===a.panel.transform||"json"===a.panel.transform)&&(a.panel.transform="timeseries_to_rows")),a.table=e.transformDataToTable(a.dataRaw,a.panel),a.table.sort(a.panel.sort),h.broadcastRender(a,a.table,a.dataRaw)},a.init()}return a.$inject=["$scope","$rootScope","$q","panelSrv","panelHelper","annotationsSrv"],a}();b.TablePanelCtrl=f});