"use strict";
(self.webpackChunkruffle_demo = self.webpackChunkruffle_demo || []).push([[339], {
    972: (e,n,_)=>{
        function t(e, n) {
            const _ = e.length
              , t = e.getChannelData(0)
              , r = e.getChannelData(1);
            let b = 0
              , f = 0;
            for (; f < _; )
                t[f] = n[b],
                r[f] = n[b + 1],
                f++,
                b += 2
        }
        function r(e, n) {
            return e[n]
        }
        _.d(n, {
            $s: ()=>r,
            tM: ()=>t
        })
    }
    ,
    339: (e,n,_)=>{
        _.r(n),
        _.d(n, {
            Ruffle: ()=>L,
            default: ()=>q,
            initSync: ()=>W
        });
        var t = _(972);
        e = _.hmd(e);
        const r = "undefined" != typeof AudioContext ? AudioContext : "undefined" != typeof webkitAudioContext ? webkitAudioContext : void 0;
        let b;
        const f = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8",{
            ignoreBOM: !0,
            fatal: !0
        }) : {
            decode: ()=>{
                throw Error("TextDecoder not available")
            }
        };
        "undefined" != typeof TextDecoder && f.decode();
        let c = null;
        function a() {
            return null !== c && 0 !== c.byteLength || (c = new Uint8Array(b.memory.buffer)),
            c
        }
        function u(e, n) {
            return e >>>= 0,
            f.decode(a().subarray(e, e + n))
        }
        function o(e) {
            return null == e
        }
        let i = null;
        function g() {
            return null !== i && 0 !== i.byteLength || (i = new Float64Array(b.memory.buffer)),
            i
        }
        let w = null;
        function d() {
            return null !== w && 0 !== w.byteLength || (w = new Int32Array(b.memory.buffer)),
            w
        }
        let l = 0;
        const s = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : {
            encode: ()=>{
                throw Error("TextEncoder not available")
            }
        }
          , m = "function" == typeof s.encodeInto ? function(e, n) {
            return s.encodeInto(e, n)
        }
        : function(e, n) {
            const _ = s.encode(e);
            return n.set(_),
            {
                read: e.length,
                written: _.length
            }
        }
        ;
        function p(e, n, _) {
            if (void 0 === _) {
                const _ = s.encode(e)
                  , t = n(_.length, 1) >>> 0;
                return a().subarray(t, t + _.length).set(_),
                l = _.length,
                t
            }
            let t = e.length
              , r = n(t, 1) >>> 0;
            const b = a();
            let f = 0;
            for (; f < t; f++) {
                const n = e.charCodeAt(f);
                if (n > 127)
                    break;
                b[r + f] = n
            }
            if (f !== t) {
                0 !== f && (e = e.slice(f)),
                r = _(r, t, t = f + 3 * e.length, 1) >>> 0;
                const n = a().subarray(r + f, r + t);
                f += m(e, n).written
            }
            return l = f,
            r
        }
        let y = null;
        function h(e) {
            const n = typeof e;
            if ("number" == n || "boolean" == n || null == e)
                return `${e}`;
            if ("string" == n)
                return `"${e}"`;
            if ("symbol" == n) {
                const n = e.description;
                return null == n ? "Symbol" : `Symbol(${n})`
            }
            if ("function" == n) {
                const n = e.name;
                return "string" == typeof n && n.length > 0 ? `Function(${n})` : "Function"
            }
            if (Array.isArray(e)) {
                const n = e.length;
                let _ = "[";
                n > 0 && (_ += h(e[0]));
                for (let t = 1; t < n; t++)
                    _ += ", " + h(e[t]);
                return _ += "]",
                _
            }
            const _ = /\[object ([^\]]+)\]/.exec(toString.call(e));
            let t;
            if (!(_.length > 1))
                return toString.call(e);
            if (t = _[1],
            "Object" == t)
                try {
                    return "Object(" + JSON.stringify(e) + ")"
                } catch (e) {
                    return "Object"
                }
            return e instanceof Error ? `${e.name}: ${e.message}\n ${e.stack}` : t
        }
        function x(e, n, _, t) {
            const r = {
                a: e,
                b: n,
                cnt: 1,
                dtor: _
            }
              , f = (...e)=>{
                r.cnt++;
                const n = r.a;
                r.a = 0;
                try {
                    return t(n, r.b, ...e)
                } finally {
                    0 == --r.cnt ? b.__wbindgen_export_3.get(r.dtor)(n, r.b) : r.a = n
                }
            }
            ;
            return f.original = r,
            f
        }
        function v(e, n, _) {
            b.closure512_externref_shim(e, n, _)
        }
        function S(e, n) {
            b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__had68ccfdb9287801(e, n)
        }
        function A(e, n, _) {
            b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4ab7309a8e8deaaf(e, n, _)
        }
        function D(e, n, _) {
            b.closure4294_externref_shim(e, n, _)
        }
        function I(e) {
            const n = b.__externref_table_alloc();
            return b.__wbindgen_export_2.set(n, e),
            n
        }
        function T(e, n) {
            try {
                return e.apply(this, n)
            } catch (e) {
                const n = I(e);
                b.__wbindgen_exn_store(n)
            }
        }
        function P(e) {
            const n = b.__wbindgen_export_2.get(e);
            return b.__externref_table_dealloc(e),
            n
        }
        let E = null;
        function F() {
            return null !== E && 0 !== E.byteLength || (E = new Uint32Array(b.memory.buffer)),
            E
        }
        let R = null;
        function M(e, n) {
            return e >>>= 0,
            (null !== R && 0 !== R.byteLength || (R = new Float32Array(b.memory.buffer)),
            R).subarray(e / 4, e / 4 + n)
        }
        function B(e, n) {
            return e >>>= 0,
            d().subarray(e / 4, e / 4 + n)
        }
        function C(e, n) {
            return e >>>= 0,
            a().subarray(e / 1, e / 1 + n)
        }
        let k = null;
        class L {
            static __wrap(e) {
                e >>>= 0;
                const n = Object.create(L.prototype);
                return n.__wbg_ptr = e,
                n
            }
            __destroy_into_raw() {
                const e = this.__wbg_ptr;
                return this.__wbg_ptr = 0,
                e
            }
            free() {
                const e = this.__destroy_into_raw();
                b.__wbg_ruffle_free(e)
            }
            constructor(e, n, _) {
                return b.ruffle_new(e, n, _)
            }
            stream_from(e, n) {
                try {
                    const t = b.__wbindgen_add_to_stack_pointer(-16)
                      , r = p(e, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , f = l;
                    b.ruffle_stream_from(t, this.__wbg_ptr, r, f, n);
                    var _ = d()[t / 4 + 0];
                    if (d()[t / 4 + 1])
                        throw P(_)
                } finally {
                    b.__wbindgen_add_to_stack_pointer(16)
                }
            }
            load_data(e, n, _) {
                try {
                    const r = b.__wbindgen_add_to_stack_pointer(-16)
                      , f = p(_, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , c = l;
                    b.ruffle_load_data(r, this.__wbg_ptr, e, n, f, c);
                    var t = d()[r / 4 + 0];
                    if (d()[r / 4 + 1])
                        throw P(t)
                } finally {
                    b.__wbindgen_add_to_stack_pointer(16)
                }
            }
            play() {
                b.ruffle_play(this.__wbg_ptr)
            }
            pause() {
                b.ruffle_pause(this.__wbg_ptr)
            }
            is_playing() {
                return 0 !== b.ruffle_is_playing(this.__wbg_ptr)
            }
            volume() {
                return b.ruffle_volume(this.__wbg_ptr)
            }
            set_volume(e) {
                b.ruffle_set_volume(this.__wbg_ptr, e)
            }
            renderer_debug_info() {
                return b.ruffle_renderer_debug_info(this.__wbg_ptr)
            }
            renderer_name() {
                return b.ruffle_renderer_name(this.__wbg_ptr)
            }
            prepare_context_menu() {
                return b.ruffle_prepare_context_menu(this.__wbg_ptr)
            }
            run_context_menu_callback(e) {
                b.ruffle_run_context_menu_callback(this.__wbg_ptr, e)
            }
            set_fullscreen(e) {
                b.ruffle_set_fullscreen(this.__wbg_ptr, e)
            }
            clear_custom_menu_items() {
                b.ruffle_clear_custom_menu_items(this.__wbg_ptr)
            }
            destroy() {
                b.ruffle_destroy(this.__wbg_ptr)
            }
            call_exposed_callback(e, n) {
                const _ = p(e, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = l
                  , r = function(e, n) {
                    const _ = n(4 * e.length, 4) >>> 0
                      , t = F();
                    for (let n = 0; n < e.length; n++)
                        t[_ / 4 + n] = I(e[n]);
                    return l = e.length,
                    _
                }(n, b.__wbindgen_malloc)
                  , f = l;
                return b.ruffle_call_exposed_callback(this.__wbg_ptr, _, t, r, f)
            }
            set_trace_observer(e) {
                b.ruffle_set_trace_observer(this.__wbg_ptr, e)
            }
            audio_context() {
                return b.ruffle_audio_context(this.__wbg_ptr)
            }
            static is_wasm_simd_used() {
                return 0 !== b.ruffle_is_wasm_simd_used()
            }
        }
        function O() {
            const n = {
                wbg: {}
            };
            return n.wbg.__wbindgen_cb_drop = function(e) {
                const n = e.original;
                return 1 == n.cnt-- && (n.a = 0,
                !0)
            }
            ,
            n.wbg.__wbg_setMetadata_128bd20648a12d07 = function(e, n) {
                e.setMetadata(n)
            }
            ,
            n.wbg.__wbindgen_is_function = function(e) {
                return "function" == typeof e
            }
            ,
            n.wbg.__wbindgen_string_new = function(e, n) {
                return u(e, n)
            }
            ,
            n.wbg.__wbg_getProperty_af1b259e02b39917 = function() {
                return T((function(e, n) {
                    return (0,
                    t.$s)(e, n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_onCallbackAvailable_d54d3847055a0720 = function(e, n, _) {
                e.onCallbackAvailable(u(n, _))
            }
            ,
            n.wbg.__wbg_onFSCommand_68fd9326a1eb7ff5 = function() {
                return T((function(e, n, _, t, r) {
                    return e.onFSCommand(u(n, _), u(t, r))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbindgen_number_get = function(e, n) {
                const _ = "number" == typeof n ? n : void 0;
                g()[e / 8 + 1] = o(_) ? 0 : _,
                d()[e / 4 + 0] = !o(_)
            }
            ,
            n.wbg.__wbindgen_string_get = function(e, n) {
                const _ = "string" == typeof n ? n : void 0;
                var t = o(_) ? 0 : p(_, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , r = l;
                d()[e / 4 + 1] = r,
                d()[e / 4 + 0] = t
            }
            ,
            n.wbg.__wbindgen_boolean_get = function(e) {
                return "boolean" == typeof e ? e ? 1 : 0 : 2
            }
            ,
            n.wbg.__wbindgen_is_null = function(e) {
                return null === e
            }
            ,
            n.wbg.__wbindgen_number_new = function(e) {
                return e
            }
            ,
            n.wbg.__wbg_panic_52092d3d09d11787 = function(e, n) {
                e.panic(n)
            }
            ,
            n.wbg.__wbg_displayRootMovieDownloadFailedMessage_ed4ad3ae9522c8a3 = function(e) {
                e.displayRootMovieDownloadFailedMessage()
            }
            ,
            n.wbg.__wbg_displayMessage_6b8a0011f836541f = function(e, n, _) {
                e.displayMessage(u(n, _))
            }
            ,
            n.wbg.__wbg_setFullscreen_85ac797b8823b727 = function() {
                return T((function(e, n) {
                    e.setFullscreen(0 !== n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_openVirtualKeyboard_e0659b8d0c7b81ed = function(e) {
                e.openVirtualKeyboard()
            }
            ,
            n.wbg.__wbg_isVirtualKeyboardFocused_1719ab4ec034b0ab = function(e) {
                return e.isVirtualKeyboardFocused()
            }
            ,
            n.wbg.__wbg_displayUnsupportedVideo_619cdc62d232655a = function(e, n, _) {
                e.displayUnsupportedVideo(u(n, _))
            }
            ,
            n.wbg.__wbindgen_error_new = function(e, n) {
                return new Error(u(e, n))
            }
            ,
            n.wbg.__wbg_ruffle_new = function(e) {
                return L.__wrap(e)
            }
            ,
            n.wbg.__wbg_copyToAudioBufferInterleaved_efb71b16faf5adb2 = function(e, n, _) {
                (0,
                t.tM)(e, M(n, _))
            }
            ,
            n.wbg.__wbindgen_is_bigint = function(e) {
                return "bigint" == typeof e
            }
            ,
            n.wbg.__wbindgen_bigint_from_i64 = function(e) {
                return e
            }
            ,
            n.wbg.__wbindgen_jsval_eq = function(e, n) {
                return e === n
            }
            ,
            n.wbg.__wbindgen_bigint_from_u64 = function(e) {
                return BigInt.asUintN(64, e)
            }
            ,
            n.wbg.__wbindgen_is_object = function(e) {
                return "object" == typeof e && null !== e
            }
            ,
            n.wbg.__wbindgen_in = function(e, n) {
                return e in n
            }
            ,
            n.wbg.__wbindgen_is_string = function(e) {
                return "string" == typeof e
            }
            ,
            n.wbg.__wbindgen_is_undefined = function(e) {
                return void 0 === e
            }
            ,
            n.wbg.__wbg_new_abda76e883ba8a5f = function() {
                return new Error
            }
            ,
            n.wbg.__wbg_stack_658279fe44541cf6 = function(e, n) {
                const _ = p(n.stack, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = l;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_error_f851667af71bcfc6 = function(e, n) {
                let _, t;
                try {
                    _ = e,
                    t = n,
                    console.error(u(e, n))
                } finally {
                    b.__wbindgen_free(_, t, 1)
                }
            }
            ,
            n.wbg.__wbindgen_jsval_loose_eq = function(e, n) {
                return e == n
            }
            ,
            n.wbg.__wbg_String_4370c5505c674d30 = function(e, n) {
                const _ = p(String(n), b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = l;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_getwithrefkey_d1f0d12f1f1b63ea = function(e, n) {
                return e[n]
            }
            ,
            n.wbg.__wbg_set_bd72c078edfa51ad = function(e, n, _) {
                e[n] = _
            }
            ,
            n.wbg.__wbg_log_c9486ca5d8e2cbe8 = function(e, n) {
                let _, t;
                try {
                    _ = e,
                    t = n,
                    console.log(u(e, n))
                } finally {
                    b.__wbindgen_free(_, t, 1)
                }
            }
            ,
            n.wbg.__wbg_log_aba5996d9bde071f = function(e, n, _, t, r, f, c, a) {
                let o, i;
                try {
                    o = e,
                    i = n,
                    console.log(u(e, n), u(_, t), u(r, f), u(c, a))
                } finally {
                    b.__wbindgen_free(o, i, 1)
                }
            }
            ,
            n.wbg.__wbg_mark_40e050a77cc39fea = function(e, n) {
                performance.mark(u(e, n))
            }
            ,
            n.wbg.__wbg_measure_aa7a73f17813f708 = function() {
                return T((function(e, n, _, t) {
                    let r, f, c, a;
                    try {
                        r = e,
                        f = n,
                        c = _,
                        a = t,
                        performance.measure(u(e, n), u(_, t))
                    } finally {
                        b.__wbindgen_free(r, f, 1),
                        b.__wbindgen_free(c, a, 1)
                    }
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_crypto_c48a774b022d20ac = function(e) {
                return e.crypto
            }
            ,
            n.wbg.__wbg_process_298734cf255a885d = function(e) {
                return e.process
            }
            ,
            n.wbg.__wbg_versions_e2e78e134e3e5d01 = function(e) {
                return e.versions
            }
            ,
            n.wbg.__wbg_node_1cd7a5d853dbea79 = function(e) {
                return e.node
            }
            ,
            n.wbg.__wbg_msCrypto_bcb970640f50a1e8 = function(e) {
                return e.msCrypto
            }
            ,
            n.wbg.__wbg_require_8f08ceecec0f4fee = function() {
                return T((function() {
                    return e.require
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getRandomValues_37fa2ca9e4e07fab = function() {
                return T((function(e, n) {
                    e.getRandomValues(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_randomFillSync_dc1e9a60c158336d = function() {
                return T((function(e, n) {
                    e.randomFillSync(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_WebGl2RenderingContext_f921526c513bf717 = function(e) {
                let n;
                try {
                    n = e instanceof WebGL2RenderingContext
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_beginQuery_d338463adf721553 = function(e, n, _) {
                e.beginQuery(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindBufferRange_d8a5ebc8ea8be507 = function(e, n, _, t, r, b) {
                e.bindBufferRange(n >>> 0, _ >>> 0, t, r, b)
            }
            ,
            n.wbg.__wbg_bindSampler_d74e398b68cf5980 = function(e, n, _) {
                e.bindSampler(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindVertexArray_8863a216d7b0a339 = function(e, n) {
                e.bindVertexArray(n)
            }
            ,
            n.wbg.__wbg_blitFramebuffer_e6642748dd06d47e = function(e, n, _, t, r, b, f, c, a, u, o) {
                e.blitFramebuffer(n, _, t, r, b, f, c, a, u >>> 0, o >>> 0)
            }
            ,
            n.wbg.__wbg_bufferData_496bbb31639d9850 = function(e, n, _, t) {
                e.bufferData(n >>> 0, _, t >>> 0)
            }
            ,
            n.wbg.__wbg_bufferData_21334671c4ba6004 = function(e, n, _, t) {
                e.bufferData(n >>> 0, _, t >>> 0)
            }
            ,
            n.wbg.__wbg_bufferSubData_c472b93c9e272eac = function(e, n, _, t) {
                e.bufferSubData(n >>> 0, _, t)
            }
            ,
            n.wbg.__wbg_clearBufferfi_25bcd35b825f629d = function(e, n, _, t, r) {
                e.clearBufferfi(n >>> 0, _, t, r)
            }
            ,
            n.wbg.__wbg_clearBufferfv_9de0cb45cc5a012b = function(e, n, _, t, r) {
                e.clearBufferfv(n >>> 0, _, M(t, r))
            }
            ,
            n.wbg.__wbg_clearBufferiv_fc2f8bce2930c586 = function(e, n, _, t, r) {
                e.clearBufferiv(n >>> 0, _, B(t, r))
            }
            ,
            n.wbg.__wbg_clearBufferuiv_2f6d220a31eabca4 = function(e, n, _, t, r) {
                var b, f;
                e.clearBufferuiv(n >>> 0, _, (b = t,
                f = r,
                b >>>= 0,
                F().subarray(b / 4, b / 4 + f)))
            }
            ,
            n.wbg.__wbg_clientWaitSync_6a74725ec890efdd = function(e, n, _, t) {
                return e.clientWaitSync(n, _ >>> 0, t >>> 0)
            }
            ,
            n.wbg.__wbg_compressedTexSubImage2D_945ba54869f3a612 = function(e, n, _, t, r, b, f, c, a, u) {
                e.compressedTexSubImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a, u)
            }
            ,
            n.wbg.__wbg_compressedTexSubImage2D_ed56fa2f82a839b1 = function(e, n, _, t, r, b, f, c, a) {
                e.compressedTexSubImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a)
            }
            ,
            n.wbg.__wbg_compressedTexSubImage3D_4cebeae1440fdc14 = function(e, n, _, t, r, b, f, c, a, u, o, i) {
                e.compressedTexSubImage3D(n >>> 0, _, t, r, b, f, c, a, u >>> 0, o, i)
            }
            ,
            n.wbg.__wbg_compressedTexSubImage3D_0ae61aaa91089745 = function(e, n, _, t, r, b, f, c, a, u, o) {
                e.compressedTexSubImage3D(n >>> 0, _, t, r, b, f, c, a, u >>> 0, o)
            }
            ,
            n.wbg.__wbg_copyBufferSubData_d112912c90270156 = function(e, n, _, t, r, b) {
                e.copyBufferSubData(n >>> 0, _ >>> 0, t, r, b)
            }
            ,
            n.wbg.__wbg_copyTexSubImage3D_9fa5e9e7b16cf09d = function(e, n, _, t, r, b, f, c, a, u) {
                e.copyTexSubImage3D(n >>> 0, _, t, r, b, f, c, a, u)
            }
            ,
            n.wbg.__wbg_createQuery_2ef2dc0f01a4a8e3 = function(e) {
                const n = e.createQuery();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createSampler_039ecd204675292b = function(e) {
                const n = e.createSampler();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createVertexArray_51d51e1e1e13e9f6 = function(e) {
                const n = e.createVertexArray();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_deleteQuery_0c64c5200cdc57a6 = function(e, n) {
                e.deleteQuery(n)
            }
            ,
            n.wbg.__wbg_deleteSampler_ce5b8e120f96fc1a = function(e, n) {
                e.deleteSampler(n)
            }
            ,
            n.wbg.__wbg_deleteSync_1b05dfcc176e7466 = function(e, n) {
                e.deleteSync(n)
            }
            ,
            n.wbg.__wbg_deleteVertexArray_3e4f2e2ff7f05a19 = function(e, n) {
                e.deleteVertexArray(n)
            }
            ,
            n.wbg.__wbg_drawArraysInstanced_8fb13fe9faf95212 = function(e, n, _, t, r) {
                e.drawArraysInstanced(n >>> 0, _, t, r)
            }
            ,
            n.wbg.__wbg_drawBuffers_15d26e17a8d24ee0 = function(e, n) {
                e.drawBuffers(n)
            }
            ,
            n.wbg.__wbg_drawElementsInstanced_dcf53461a977d44c = function(e, n, _, t, r, b) {
                e.drawElementsInstanced(n >>> 0, _, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_endQuery_faf7eb231d6f2a66 = function(e, n) {
                e.endQuery(n >>> 0)
            }
            ,
            n.wbg.__wbg_fenceSync_d68dcbdcdd134d92 = function(e, n, _) {
                const t = e.fenceSync(n >>> 0, _ >>> 0);
                return o(t) ? 0 : I(t)
            }
            ,
            n.wbg.__wbg_framebufferTextureLayer_a92788e5f0409234 = function(e, n, _, t, r, b) {
                e.framebufferTextureLayer(n >>> 0, _ >>> 0, t, r, b)
            }
            ,
            n.wbg.__wbg_getBufferSubData_8710cc73621fc332 = function(e, n, _, t) {
                e.getBufferSubData(n >>> 0, _, t)
            }
            ,
            n.wbg.__wbg_getIndexedParameter_4f004dc25c3d15a9 = function() {
                return T((function(e, n, _) {
                    return e.getIndexedParameter(n >>> 0, _ >>> 0)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getQueryParameter_64c18ef385414bf1 = function(e, n, _) {
                return e.getQueryParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getSyncParameter_d93ec7f6bb11274c = function(e, n, _) {
                return e.getSyncParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getUniformBlockIndex_99c15053c9a87c73 = function(e, n, _, t) {
                return e.getUniformBlockIndex(n, u(_, t))
            }
            ,
            n.wbg.__wbg_invalidateFramebuffer_03bd99588b15d627 = function() {
                return T((function(e, n, _) {
                    e.invalidateFramebuffer(n >>> 0, _)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_readBuffer_c426fe18344296ff = function(e, n) {
                e.readBuffer(n >>> 0)
            }
            ,
            n.wbg.__wbg_readPixels_99fda83f6ca7ec72 = function() {
                return T((function(e, n, _, t, r, b, f, c) {
                    e.readPixels(n, _, t, r, b >>> 0, f >>> 0, c)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_readPixels_9634f0dcfb54667c = function() {
                return T((function(e, n, _, t, r, b, f, c) {
                    e.readPixels(n, _, t, r, b >>> 0, f >>> 0, c)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_renderbufferStorageMultisample_9260e2e620c949e5 = function(e, n, _, t, r, b) {
                e.renderbufferStorageMultisample(n >>> 0, _, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_samplerParameterf_1c7562ef061b803b = function(e, n, _, t) {
                e.samplerParameterf(n, _ >>> 0, t)
            }
            ,
            n.wbg.__wbg_samplerParameteri_0fee083bc48e70ee = function(e, n, _, t) {
                e.samplerParameteri(n, _ >>> 0, t)
            }
            ,
            n.wbg.__wbg_texImage2D_699c5d8e0d9ea28a = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u, o) {
                    e.texImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a >>> 0, 0 === u ? void 0 : C(u, o))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texStorage2D_6665d01025a7e7fc = function(e, n, _, t, r, b) {
                e.texStorage2D(n >>> 0, _, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_texStorage3D_c01c31c1b02d75fd = function(e, n, _, t, r, b, f) {
                e.texStorage3D(n >>> 0, _, t >>> 0, r, b, f)
            }
            ,
            n.wbg.__wbg_texSubImage2D_d2841ded12a8aa66 = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage2D_bccf4e250f1ce1b8 = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage2D_780a7c889dc20a98 = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage2D_b5bb36f2f54b4264 = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage2D_a297114050ea1098 = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage3D_43f39a73ed02fae3 = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u, o, i) {
                    e.texSubImage3D(n >>> 0, _, t, r, b, f, c, a, u >>> 0, o >>> 0, i)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage3D_ffdccca1422b482a = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u, o, i) {
                    e.texSubImage3D(n >>> 0, _, t, r, b, f, c, a, u >>> 0, o >>> 0, i)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage3D_69d5e09d45e0251c = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u, o, i) {
                    e.texSubImage3D(n >>> 0, _, t, r, b, f, c, a, u >>> 0, o >>> 0, i)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage3D_ae3ed5d0154c346c = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u, o, i) {
                    e.texSubImage3D(n >>> 0, _, t, r, b, f, c, a, u >>> 0, o >>> 0, i)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage3D_80693fc2c7855e4d = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u, o, i) {
                    e.texSubImage3D(n >>> 0, _, t, r, b, f, c, a, u >>> 0, o >>> 0, i)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_uniform2fv_2b473f6dce24c898 = function(e, n, _, t) {
                e.uniform2fv(n, M(_, t))
            }
            ,
            n.wbg.__wbg_uniform2iv_fdaa3cd258d3451e = function(e, n, _, t) {
                e.uniform2iv(n, B(_, t))
            }
            ,
            n.wbg.__wbg_uniform3fv_3e55033ca16ec6ab = function(e, n, _, t) {
                e.uniform3fv(n, M(_, t))
            }
            ,
            n.wbg.__wbg_uniform3iv_3d3ed90c76e6777e = function(e, n, _, t) {
                e.uniform3iv(n, B(_, t))
            }
            ,
            n.wbg.__wbg_uniform4fv_26ec0c9d7bf6d7c6 = function(e, n, _, t) {
                e.uniform4fv(n, M(_, t))
            }
            ,
            n.wbg.__wbg_uniform4iv_2be6b77c47b90d81 = function(e, n, _, t) {
                e.uniform4iv(n, B(_, t))
            }
            ,
            n.wbg.__wbg_uniformBlockBinding_0dc4bd81bb4ccb6a = function(e, n, _, t) {
                e.uniformBlockBinding(n, _ >>> 0, t >>> 0)
            }
            ,
            n.wbg.__wbg_uniformMatrix2fv_1ab7aeb8562ea3dd = function(e, n, _, t, r) {
                e.uniformMatrix2fv(n, 0 !== _, M(t, r))
            }
            ,
            n.wbg.__wbg_uniformMatrix3fv_0b151be4d76ee66b = function(e, n, _, t, r) {
                e.uniformMatrix3fv(n, 0 !== _, M(t, r))
            }
            ,
            n.wbg.__wbg_uniformMatrix4fv_766b5ba343983038 = function(e, n, _, t, r) {
                e.uniformMatrix4fv(n, 0 !== _, M(t, r))
            }
            ,
            n.wbg.__wbg_vertexAttribDivisor_197e2e23e3fbde7f = function(e, n, _) {
                e.vertexAttribDivisor(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_vertexAttribIPointer_6f8540e358f8a547 = function(e, n, _, t, r, b) {
                e.vertexAttribIPointer(n >>> 0, _, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_activeTexture_799bf1387e911c27 = function(e, n) {
                e.activeTexture(n >>> 0)
            }
            ,
            n.wbg.__wbg_attachShader_47256b6b3d42a22e = function(e, n, _) {
                e.attachShader(n, _)
            }
            ,
            n.wbg.__wbg_bindBuffer_24f6010e273fa400 = function(e, n, _) {
                e.bindBuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindFramebuffer_a9573e340dab20fe = function(e, n, _) {
                e.bindFramebuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindRenderbuffer_54c404711f9b6958 = function(e, n, _) {
                e.bindRenderbuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindTexture_92d6d7f8bff9531e = function(e, n, _) {
                e.bindTexture(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_blendColor_7974f09cb60d2be0 = function(e, n, _, t, r) {
                e.blendColor(n, _, t, r)
            }
            ,
            n.wbg.__wbg_blendEquation_12146cb96dc1bcd9 = function(e, n) {
                e.blendEquation(n >>> 0)
            }
            ,
            n.wbg.__wbg_blendEquationSeparate_205526dad772d160 = function(e, n, _) {
                e.blendEquationSeparate(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_blendFunc_533de6de45b80a09 = function(e, n, _) {
                e.blendFunc(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_blendFuncSeparate_fbf93dee3e5ce456 = function(e, n, _, t, r) {
                e.blendFuncSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0)
            }
            ,
            n.wbg.__wbg_colorMask_fba1e2efd891e2ac = function(e, n, _, t, r) {
                e.colorMask(0 !== n, 0 !== _, 0 !== t, 0 !== r)
            }
            ,
            n.wbg.__wbg_compileShader_6bf78b425d5c98e1 = function(e, n) {
                e.compileShader(n)
            }
            ,
            n.wbg.__wbg_copyTexSubImage2D_26685100d5f2b4c0 = function(e, n, _, t, r, b, f, c, a) {
                e.copyTexSubImage2D(n >>> 0, _, t, r, b, f, c, a)
            }
            ,
            n.wbg.__wbg_createBuffer_323425af422748ac = function(e) {
                const n = e.createBuffer();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createFramebuffer_1684a99697ac9563 = function(e) {
                const n = e.createFramebuffer();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createProgram_4eaf3b97b5747a62 = function(e) {
                const n = e.createProgram();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createRenderbuffer_3e6dd356d7897ed7 = function(e) {
                const n = e.createRenderbuffer();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createShader_429776c9dd6fb87b = function(e, n) {
                const _ = e.createShader(n >>> 0);
                return o(_) ? 0 : I(_)
            }
            ,
            n.wbg.__wbg_createTexture_1bf4d6fec570124b = function(e) {
                const n = e.createTexture();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_cullFace_6daa9f2aa42b4620 = function(e, n) {
                e.cullFace(n >>> 0)
            }
            ,
            n.wbg.__wbg_deleteBuffer_2c09d03fa4b0bd08 = function(e, n) {
                e.deleteBuffer(n)
            }
            ,
            n.wbg.__wbg_deleteFramebuffer_edd16bb8df6a8e0d = function(e, n) {
                e.deleteFramebuffer(n)
            }
            ,
            n.wbg.__wbg_deleteProgram_53a32852f245b839 = function(e, n) {
                e.deleteProgram(n)
            }
            ,
            n.wbg.__wbg_deleteRenderbuffer_134040051fcc1ba5 = function(e, n) {
                e.deleteRenderbuffer(n)
            }
            ,
            n.wbg.__wbg_deleteShader_7c1222349324b5e2 = function(e, n) {
                e.deleteShader(n)
            }
            ,
            n.wbg.__wbg_deleteTexture_4fcfea73cd8f6214 = function(e, n) {
                e.deleteTexture(n)
            }
            ,
            n.wbg.__wbg_depthFunc_fb41ad353d07948d = function(e, n) {
                e.depthFunc(n >>> 0)
            }
            ,
            n.wbg.__wbg_depthMask_6a4ff02cd2a2702e = function(e, n) {
                e.depthMask(0 !== n)
            }
            ,
            n.wbg.__wbg_depthRange_a5647a9040aec55b = function(e, n, _) {
                e.depthRange(n, _)
            }
            ,
            n.wbg.__wbg_disable_e02106ca6c7002d6 = function(e, n) {
                e.disable(n >>> 0)
            }
            ,
            n.wbg.__wbg_disableVertexAttribArray_6d57776c8f642f44 = function(e, n) {
                e.disableVertexAttribArray(n >>> 0)
            }
            ,
            n.wbg.__wbg_drawArrays_c91ce3f736bf1f2a = function(e, n, _, t) {
                e.drawArrays(n >>> 0, _, t)
            }
            ,
            n.wbg.__wbg_enable_195891416c520019 = function(e, n) {
                e.enable(n >>> 0)
            }
            ,
            n.wbg.__wbg_enableVertexAttribArray_8804480c2ea0bb72 = function(e, n) {
                e.enableVertexAttribArray(n >>> 0)
            }
            ,
            n.wbg.__wbg_framebufferRenderbuffer_3ec0983918c2b69d = function(e, n, _, t, r) {
                e.framebufferRenderbuffer(n >>> 0, _ >>> 0, t >>> 0, r)
            }
            ,
            n.wbg.__wbg_framebufferTexture2D_e88fcbd7f8523bb8 = function(e, n, _, t, r, b) {
                e.framebufferTexture2D(n >>> 0, _ >>> 0, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_frontFace_786a036f1d643925 = function(e, n) {
                e.frontFace(n >>> 0)
            }
            ,
            n.wbg.__wbg_getActiveUniform_78367ddc7339640b = function(e, n, _) {
                const t = e.getActiveUniform(n, _ >>> 0);
                return o(t) ? 0 : I(t)
            }
            ,
            n.wbg.__wbg_getError_7191ad6ea53607fe = function(e) {
                return e.getError()
            }
            ,
            n.wbg.__wbg_getExtension_77909f6d51d49d4d = function() {
                return T((function(e, n, _) {
                    const t = e.getExtension(u(n, _));
                    return o(t) ? 0 : I(t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getParameter_55b36a787dbbfb74 = function() {
                return T((function(e, n) {
                    return e.getParameter(n >>> 0)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getProgramInfoLog_b81bc53188e286fa = function(e, n, _) {
                const t = n.getProgramInfoLog(_);
                var r = o(t) ? 0 : p(t, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , f = l;
                d()[e / 4 + 1] = f,
                d()[e / 4 + 0] = r
            }
            ,
            n.wbg.__wbg_getProgramParameter_35522a0bfdfaad27 = function(e, n, _) {
                return e.getProgramParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getShaderInfoLog_968b93e75477d725 = function(e, n, _) {
                const t = n.getShaderInfoLog(_);
                var r = o(t) ? 0 : p(t, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , f = l;
                d()[e / 4 + 1] = f,
                d()[e / 4 + 0] = r
            }
            ,
            n.wbg.__wbg_getShaderParameter_ac2727ae4fe7648e = function(e, n, _) {
                return e.getShaderParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getSupportedExtensions_fafc31aab913037d = function(e) {
                const n = e.getSupportedExtensions();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_getUniformLocation_9f6eb60c560a347b = function(e, n, _, t) {
                const r = e.getUniformLocation(n, u(_, t));
                return o(r) ? 0 : I(r)
            }
            ,
            n.wbg.__wbg_linkProgram_33998194075d71fb = function(e, n) {
                e.linkProgram(n)
            }
            ,
            n.wbg.__wbg_pixelStorei_f3a24990aa352fc7 = function(e, n, _) {
                e.pixelStorei(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_polygonOffset_faca8e73770272ff = function(e, n, _) {
                e.polygonOffset(n, _)
            }
            ,
            n.wbg.__wbg_renderbufferStorage_987d1af7c9faf5dd = function(e, n, _, t, r) {
                e.renderbufferStorage(n >>> 0, _ >>> 0, t, r)
            }
            ,
            n.wbg.__wbg_scissor_e8e41e1c0a9817c8 = function(e, n, _, t, r) {
                e.scissor(n, _, t, r)
            }
            ,
            n.wbg.__wbg_shaderSource_1cb7c64dc7d1a500 = function(e, n, _, t) {
                e.shaderSource(n, u(_, t))
            }
            ,
            n.wbg.__wbg_stencilFuncSeparate_8ff94e24a50a3c45 = function(e, n, _, t, r) {
                e.stencilFuncSeparate(n >>> 0, _ >>> 0, t, r >>> 0)
            }
            ,
            n.wbg.__wbg_stencilMask_641f92999dd3c3de = function(e, n) {
                e.stencilMask(n >>> 0)
            }
            ,
            n.wbg.__wbg_stencilMaskSeparate_6b2c8ef22fb3b6d1 = function(e, n, _) {
                e.stencilMaskSeparate(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_stencilOpSeparate_38925591af8feb44 = function(e, n, _, t, r) {
                e.stencilOpSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0)
            }
            ,
            n.wbg.__wbg_texParameteri_85dad939f62a15aa = function(e, n, _, t) {
                e.texParameteri(n >>> 0, _ >>> 0, t)
            }
            ,
            n.wbg.__wbg_uniform1f_88379f4e2630bc66 = function(e, n, _) {
                e.uniform1f(n, _)
            }
            ,
            n.wbg.__wbg_uniform1i_d2e61a6a43889648 = function(e, n, _) {
                e.uniform1i(n, _)
            }
            ,
            n.wbg.__wbg_uniform4f_a9fd337d4b07f595 = function(e, n, _, t, r, b) {
                e.uniform4f(n, _, t, r, b)
            }
            ,
            n.wbg.__wbg_useProgram_3683cf6f60939dcd = function(e, n) {
                e.useProgram(n)
            }
            ,
            n.wbg.__wbg_vertexAttribPointer_316ffe2f0458fde7 = function(e, n, _, t, r, b, f) {
                e.vertexAttribPointer(n >>> 0, _, t >>> 0, 0 !== r, b, f)
            }
            ,
            n.wbg.__wbg_viewport_fad1ce9e18f741c0 = function(e, n, _, t, r) {
                e.viewport(n, _, t, r)
            }
            ,
            n.wbg.__wbg_instanceof_Window_9029196b662bc42a = function(e) {
                let n;
                try {
                    n = e instanceof Window
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_document_f7ace2b956f30a4f = function(e) {
                const n = e.document;
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_location_56243dba507f472d = function(e) {
                return e.location
            }
            ,
            n.wbg.__wbg_navigator_7c9103698acde322 = function(e) {
                return e.navigator
            }
            ,
            n.wbg.__wbg_devicePixelRatio_f9de7bddca0eaf20 = function(e) {
                return e.devicePixelRatio
            }
            ,
            n.wbg.__wbg_localStorage_dbac11bd189e9fa0 = function() {
                return T((function(e) {
                    const n = e.localStorage;
                    return o(n) ? 0 : I(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_confirm_d7ddd98cd3a22cf2 = function() {
                return T((function(e, n, _) {
                    return e.confirm(u(n, _))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_focus_3936c6eb13bd58df = function() {
                return T((function(e) {
                    e.focus()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_open_7a2a86bf6285507d = function() {
                return T((function(e, n, _, t, r) {
                    const b = e.open(u(n, _), u(t, r));
                    return o(b) ? 0 : I(b)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_cancelAnimationFrame_9b68e9588c6543bc = function() {
                return T((function(e, n) {
                    e.cancelAnimationFrame(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_requestAnimationFrame_d082200514b6674d = function() {
                return T((function(e, n) {
                    return e.requestAnimationFrame(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_fetch_336b6f0cb426b46e = function(e, n) {
                return e.fetch(n)
            }
            ,
            n.wbg.__wbg_body_674aec4c1c0910cd = function(e) {
                const n = e.body;
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createElement_4891554b28d3388b = function() {
                return T((function(e, n, _) {
                    return e.createElement(u(n, _))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_createElementNS_119acf9e82482041 = function() {
                return T((function(e, n, _, t, r) {
                    return e.createElementNS(0 === n ? void 0 : u(n, _), u(t, r))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_querySelector_52ded52c20e23921 = function() {
                return T((function(e, n, _) {
                    const t = e.querySelector(u(n, _));
                    return o(t) ? 0 : I(t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setid_1984ee27e5075311 = function(e, n, _) {
                e.id = u(n, _)
            }
            ,
            n.wbg.__wbg_clientWidth_51ec21e3189f5656 = function(e) {
                return e.clientWidth
            }
            ,
            n.wbg.__wbg_clientHeight_09ec0b524d59c367 = function(e) {
                return e.clientHeight
            }
            ,
            n.wbg.__wbg_querySelector_aff7124330d731be = function() {
                return T((function(e, n, _) {
                    const t = e.querySelector(u(n, _));
                    return o(t) ? 0 : I(t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_releasePointerCapture_c36c2b5804654f8b = function() {
                return T((function(e, n) {
                    e.releasePointerCapture(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setAttribute_e7e80b478b7b8b2f = function() {
                return T((function(e, n, _, t, r) {
                    e.setAttribute(u(n, _), u(t, r))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setAttributeNS_64c72a189bd9594f = function() {
                return T((function(e, n, _, t, r, b, f) {
                    e.setAttributeNS(0 === n ? void 0 : u(n, _), u(t, r), u(b, f))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setPointerCapture_e7c29336490bba19 = function() {
                return T((function(e, n) {
                    e.setPointerCapture(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_remove_48288e91662163dc = function(e) {
                e.remove()
            }
            ,
            n.wbg.__wbg_length_a1cd52a4ac95d41e = function(e) {
                return e.length
            }
            ,
            n.wbg.__wbg_setbuffer_beeece042e02534f = function(e, n) {
                e.buffer = n
            }
            ,
            n.wbg.__wbg_setonended_83dd83b7f84cdef2 = function(e, n) {
                e.onended = n
            }
            ,
            n.wbg.__wbg_start_99ecc2647eb67ca6 = function() {
                return T((function(e, n) {
                    e.start(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_connect_3f8f5ba805800c62 = function() {
                return T((function(e, n) {
                    return e.connect(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setProperty_b95ef63ab852879e = function() {
                return T((function(e, n, _, t, r) {
                    e.setProperty(u(n, _), u(t, r))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_ctrlKey_582686fb2263dd3c = function(e) {
                return e.ctrlKey
            }
            ,
            n.wbg.__wbg_shiftKey_48e8701355d8e2d4 = function(e) {
                return e.shiftKey
            }
            ,
            n.wbg.__wbg_metaKey_43193b7cc99f8914 = function(e) {
                return e.metaKey
            }
            ,
            n.wbg.__wbg_key_8aeaa079126a9cc7 = function(e, n) {
                const _ = p(n.key, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = l;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_code_96d6322b968b2d17 = function(e, n) {
                const _ = p(n.code, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = l;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_language_4f943dbdc59c3951 = function(e, n) {
                const _ = n.language;
                var t = o(_) ? 0 : p(_, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , r = l;
                d()[e / 4 + 1] = r,
                d()[e / 4 + 0] = t
            }
            ,
            n.wbg.__wbg_baseURI_ca0d285a4207cf6a = function() {
                return T((function(e, n) {
                    const _ = n.baseURI;
                    var t = o(_) ? 0 : p(_, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , r = l;
                    d()[e / 4 + 1] = r,
                    d()[e / 4 + 0] = t
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_parentElement_c75962bc9997ea5f = function(e) {
                const n = e.parentElement;
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_appendChild_51339d4cde00ee22 = function() {
                return T((function(e, n) {
                    return e.appendChild(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_removeChild_973429f368206138 = function() {
                return T((function(e, n) {
                    return e.removeChild(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_framebufferTextureMultiviewOVR_4d911c3fccedc517 = function(e, n, _, t, r, b, f) {
                e.framebufferTextureMultiviewOVR(n >>> 0, _ >>> 0, t, r, b, f)
            }
            ,
            n.wbg.__wbg_headers_b439dcff02e808e5 = function(e) {
                return e.headers
            }
            ,
            n.wbg.__wbg_newwithstrandinit_cad5cd6038c7ff5d = function() {
                return T((function(e, n, _) {
                    return new Request(u(e, n),_)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getData_8aeca5994420c599 = function() {
                return T((function(e, n, _, t) {
                    const r = p(n.getData(u(_, t)), b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , f = l;
                    d()[e / 4 + 1] = f,
                    d()[e / 4 + 0] = r
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_videoWidth_02eadb74917aa4fc = function(e) {
                return e.videoWidth
            }
            ,
            n.wbg.__wbg_videoHeight_dac4c345988e5562 = function(e) {
                return e.videoHeight
            }
            ,
            n.wbg.__wbg_new_68d926df4499a81a = function() {
                return T((function() {
                    return new Path2D
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_addPath_3cc27612c7072ced = function(e, n, _) {
                e.addPath(n, _)
            }
            ,
            n.wbg.__wbg_bezierCurveTo_6579a7b8038a0ab2 = function(e, n, _, t, r, b, f) {
                e.bezierCurveTo(n, _, t, r, b, f)
            }
            ,
            n.wbg.__wbg_closePath_f3ce4126143e1d2f = function(e) {
                e.closePath()
            }
            ,
            n.wbg.__wbg_lineTo_6dae7afdea80cb55 = function(e, n, _) {
                e.lineTo(n, _)
            }
            ,
            n.wbg.__wbg_moveTo_f28fe5c750fc6dcd = function(e, n, _) {
                e.moveTo(n, _)
            }
            ,
            n.wbg.__wbg_quadraticCurveTo_becb27dbf030fff7 = function(e, n, _, t, r) {
                e.quadraticCurveTo(n, _, t, r)
            }
            ,
            n.wbg.__wbg_rect_5c1dc88471690403 = function(e, n, _, t, r) {
                e.rect(n, _, t, r)
            }
            ,
            n.wbg.__wbg_drawArraysInstancedANGLE_01b862ba133350a3 = function(e, n, _, t, r) {
                e.drawArraysInstancedANGLE(n >>> 0, _, t, r)
            }
            ,
            n.wbg.__wbg_drawElementsInstancedANGLE_ea6343af8bf9c9f8 = function(e, n, _, t, r, b) {
                e.drawElementsInstancedANGLE(n >>> 0, _, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_vertexAttribDivisorANGLE_a8476eb778e16c70 = function(e, n, _) {
                e.vertexAttribDivisorANGLE(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_clipboardData_c480a3b34e3e7b1d = function(e) {
                const n = e.clipboardData;
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_addEventListener_5651108fc3ffeb6e = function() {
                return T((function(e, n, _, t) {
                    e.addEventListener(u(n, _), t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_addEventListener_a5963e26cd7b176b = function() {
                return T((function(e, n, _, t, r) {
                    e.addEventListener(u(n, _), t, r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_addEventListener_2cee5876a20f9a8c = function() {
                return T((function(e, n, _, t, r) {
                    e.addEventListener(u(n, _), t, 0 !== r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_removeEventListener_5de660c02ed784e4 = function() {
                return T((function(e, n, _, t) {
                    e.removeEventListener(u(n, _), t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_removeEventListener_782040b4432709cb = function() {
                return T((function(e, n, _, t, r) {
                    e.removeEventListener(u(n, _), t, 0 !== r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_HtmlFormElement_b57527983c7c1ada = function(e) {
                let n;
                try {
                    n = e instanceof HTMLFormElement
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_setaction_e223447a07aa1887 = function(e, n, _) {
                e.action = u(n, _)
            }
            ,
            n.wbg.__wbg_setmethod_16a6c8e4f4b47198 = function(e, n, _) {
                e.method = u(n, _)
            }
            ,
            n.wbg.__wbg_settarget_14aec6123b774250 = function(e, n, _) {
                e.target = u(n, _)
            }
            ,
            n.wbg.__wbg_submit_fd8bd9b11eead9ed = function() {
                return T((function(e) {
                    e.submit()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_href_d62a28e4fc1ab948 = function() {
                return T((function(e, n) {
                    const _ = p(n.href, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , t = l;
                    d()[e / 4 + 1] = t,
                    d()[e / 4 + 0] = _
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_protocol_91948f5885595359 = function() {
                return T((function(e, n) {
                    const _ = p(n.protocol, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , t = l;
                    d()[e / 4 + 1] = t,
                    d()[e / 4 + 0] = _
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_assign_6a18f7b04202c9b9 = function() {
                return T((function(e, n, _) {
                    e.assign(u(n, _))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_get_f028630ecf797640 = function() {
                return T((function(e, n, _, t) {
                    const r = n[u(_, t)];
                    var f = o(r) ? 0 : p(r, b.__wbindgen_malloc, b.__wbindgen_realloc)
                      , c = l;
                    d()[e / 4 + 1] = c,
                    d()[e / 4 + 0] = f
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_set_b574fec410521820 = function() {
                return T((function(e, n, _, t, r) {
                    e[u(n, _)] = u(t, r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_delete_23c0d8a2a81a97e8 = function() {
                return T((function(e, n, _) {
                    delete e[u(n, _)]
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_drawBuffersWEBGL_139bf2fe0c1522d6 = function(e, n) {
                e.drawBuffersWEBGL(n)
            }
            ,
            n.wbg.__wbg_instanceof_CanvasRenderingContext2d_bc0a6635c96eca9b = function(e) {
                let n;
                try {
                    n = e instanceof CanvasRenderingContext2D
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_setglobalAlpha_97edbae8133ee6af = function(e, n) {
                e.globalAlpha = n
            }
            ,
            n.wbg.__wbg_setglobalCompositeOperation_84bbd92ad836f613 = function() {
                return T((function(e, n, _) {
                    e.globalCompositeOperation = u(n, _)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setstrokeStyle_3fe4d1c0d11ed1b6 = function(e, n) {
                e.strokeStyle = n
            }
            ,
            n.wbg.__wbg_setfillStyle_401fa583a1c8863c = function(e, n) {
                e.fillStyle = n
            }
            ,
            n.wbg.__wbg_setfilter_07ed01a555f85fdd = function(e, n, _) {
                e.filter = u(n, _)
            }
            ,
            n.wbg.__wbg_setimageSmoothingEnabled_703f4d1eabdc4004 = function(e, n) {
                e.imageSmoothingEnabled = 0 !== n
            }
            ,
            n.wbg.__wbg_setlineWidth_6cbd15cb2b4ab14b = function(e, n) {
                e.lineWidth = n
            }
            ,
            n.wbg.__wbg_setlineCap_6ebf29df37947b53 = function(e, n, _) {
                e.lineCap = u(n, _)
            }
            ,
            n.wbg.__wbg_setlineJoin_eccaea89d57fb044 = function(e, n, _) {
                e.lineJoin = u(n, _)
            }
            ,
            n.wbg.__wbg_setmiterLimit_50d0d46f19e3054f = function(e, n) {
                e.miterLimit = n
            }
            ,
            n.wbg.__wbg_drawImage_51831abbe53b6d2a = function() {
                return T((function(e, n, _, t) {
                    e.drawImage(n, _, t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_clip_1e4ca4e6321b64bf = function(e, n, _) {
                e.clip(n, _)
            }
            ,
            n.wbg.__wbg_fill_d61aea098fdc5814 = function(e, n, _) {
                e.fill(n, _)
            }
            ,
            n.wbg.__wbg_stroke_c4647eb26598b90b = function(e, n) {
                e.stroke(n)
            }
            ,
            n.wbg.__wbg_createLinearGradient_32d24e61e667d0ee = function(e, n, _, t, r) {
                return e.createLinearGradient(n, _, t, r)
            }
            ,
            n.wbg.__wbg_createPattern_b554842f03d7adfe = function() {
                return T((function(e, n, _, t) {
                    const r = e.createPattern(n, u(_, t));
                    return o(r) ? 0 : I(r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_createRadialGradient_b9262e36ae8f3cea = function() {
                return T((function(e, n, _, t, r, b, f) {
                    return e.createRadialGradient(n, _, t, r, b, f)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_putImageData_f157d52a70a206d5 = function() {
                return T((function(e, n, _, t) {
                    e.putImageData(n, _, t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_clearRect_517d3360d8be8a55 = function(e, n, _, t, r) {
                e.clearRect(n, _, t, r)
            }
            ,
            n.wbg.__wbg_fillRect_e285f7b46668b7fa = function(e, n, _, t, r) {
                e.fillRect(n, _, t, r)
            }
            ,
            n.wbg.__wbg_restore_890c3582852dbadf = function(e) {
                e.restore()
            }
            ,
            n.wbg.__wbg_save_cdcca9591f027e80 = function(e) {
                e.save()
            }
            ,
            n.wbg.__wbg_resetTransform_8427c5468207dba3 = function() {
                return T((function(e) {
                    e.resetTransform()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setTransform_39caea5e97b29f2e = function() {
                return T((function(e, n, _, t, r, b, f) {
                    e.setTransform(n, _, t, r, b, f)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_transform_c9f55f741f6615bf = function() {
                return T((function(e, n, _, t, r, b, f) {
                    e.transform(n, _, t, r, b, f)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_currentTarget_be4545d7d2e0a77f = function(e) {
                const n = e.currentTarget;
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_preventDefault_24104f3f0a54546a = function(e) {
                e.preventDefault()
            }
            ,
            n.wbg.__wbg_newwithbuffersourcesequenceandoptions_59d261a36a6bcb4b = function() {
                return T((function(e, n) {
                    return new Blob(e,n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_setTransform_a645f7c1bcce1364 = function(e, n) {
                e.setTransform(n)
            }
            ,
            n.wbg.__wbg_set_b34caba58723c454 = function() {
                return T((function(e, n, _, t, r) {
                    e.set(u(n, _), u(t, r))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_HtmlTextAreaElement_348d0e222e16eec4 = function(e) {
                let n;
                try {
                    n = e instanceof HTMLTextAreaElement
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_setvalue_0dc100d4b9908028 = function(e, n, _) {
                e.value = u(n, _)
            }
            ,
            n.wbg.__wbg_select_6be40fad5b8e1680 = function(e) {
                e.select()
            }
            ,
            n.wbg.__wbg_width_c97f89a38a3c1da7 = function(e) {
                return e.width
            }
            ,
            n.wbg.__wbg_height_c8424a3757db7869 = function(e) {
                return e.height
            }
            ,
            n.wbg.__wbg_newwithsw_102f92aa6317fd45 = function() {
                return T((function(e, n) {
                    return new ImageData(e >>> 0,n >>> 0)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_newwithu8clampedarray_fb90064f569c16ec = function() {
                return T((function(e, n, _) {
                    return new ImageData((t = e,
                    r = n,
                    t >>>= 0,
                    (null !== k && 0 !== k.byteLength || (k = new Uint8ClampedArray(b.memory.buffer)),
                    k).subarray(t / 1, t / 1 + r)),_ >>> 0);
                    var t, r
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_a_a582c5862d7b76b9 = function(e) {
                return e.a
            }
            ,
            n.wbg.__wbg_seta_7d2bfcca92d2ffa9 = function(e, n) {
                e.a = n
            }
            ,
            n.wbg.__wbg_b_3074f954105a7c92 = function(e) {
                return e.b
            }
            ,
            n.wbg.__wbg_c_71713b23124c2037 = function(e) {
                return e.c
            }
            ,
            n.wbg.__wbg_d_ddd916af3f35b902 = function(e) {
                return e.d
            }
            ,
            n.wbg.__wbg_setd_658afd0040997055 = function(e, n) {
                e.d = n
            }
            ,
            n.wbg.__wbg_e_8c02a65e774a03bb = function(e) {
                return e.e
            }
            ,
            n.wbg.__wbg_f_a0ec3b923f8249fe = function(e) {
                return e.f
            }
            ,
            n.wbg.__wbg_new_eb9a803ff8e4fd2f = function() {
                return T((function() {
                    return new DOMMatrix
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_newwitharray64_9cbe4d780edc6b4a = function() {
                return T((function(e, n) {
                    var _, t;
                    return new DOMMatrix((_ = e,
                    t = n,
                    _ >>>= 0,
                    g().subarray(_ / 8, _ / 8 + t)))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_HtmlDocument_0485e23863c92f34 = function(e) {
                let n;
                try {
                    n = e instanceof HTMLDocument
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_execCommand_eecccd1fb945375b = function() {
                return T((function(e, n, _) {
                    return e.execCommand(u(n, _))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_HtmlInputElement_31b50e0cf542c524 = function(e) {
                let n;
                try {
                    n = e instanceof HTMLInputElement
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_setname_d54ea76b414f305e = function(e, n, _) {
                e.name = u(n, _)
            }
            ,
            n.wbg.__wbg_settype_ed9a0cf484870612 = function(e, n, _) {
                e.type = u(n, _)
            }
            ,
            n.wbg.__wbg_setvalue_1f95e61cbc382f7f = function(e, n, _) {
                e.value = u(n, _)
            }
            ,
            n.wbg.__wbg_now_0cfdc90c97d0c24b = function(e) {
                return e.now()
            }
            ,
            n.wbg.__wbg_size_6eb4aa794f6bf220 = function(e) {
                return e.size
            }
            ,
            n.wbg.__wbg_type_37bb6b4936b5e027 = function(e) {
                return e.type
            }
            ,
            n.wbg.__wbg_name_ebae3a7e89367611 = function(e, n) {
                const _ = p(n.name, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = l;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_getSupportedProfiles_420ce044cc3114a1 = function(e) {
                const n = e.getSupportedProfiles();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_style_3801009b2339aa94 = function(e) {
                return e.style
            }
            ,
            n.wbg.__wbg_destination_9e793cf556243084 = function(e) {
                return e.destination
            }
            ,
            n.wbg.__wbg_sampleRate_951ae4b792d7f810 = function(e) {
                return e.sampleRate
            }
            ,
            n.wbg.__wbg_currentTime_c6831b97750b898c = function(e) {
                return e.currentTime
            }
            ,
            n.wbg.__wbg_new_1b59056b80579a3b = function() {
                return T((function() {
                    return new r
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_close_51aa5539747ce076 = function() {
                return T((function(e) {
                    return e.close()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_suspend_429126c923b22063 = function() {
                return T((function(e) {
                    return e.suspend()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_createBuffer_13cd030d2b48e8fa = function() {
                return T((function(e, n, _, t) {
                    return e.createBuffer(n >>> 0, _ >>> 0, t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_createBufferSource_58423f6345b5f559 = function() {
                return T((function(e) {
                    return e.createBufferSource()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_resume_9dc64ed7c3a65255 = function() {
                return T((function(e) {
                    return e.resume()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_bindVertexArrayOES_b7d9da7e073aa6b5 = function(e, n) {
                e.bindVertexArrayOES(n)
            }
            ,
            n.wbg.__wbg_createVertexArrayOES_6a3c3a5a68201f8f = function(e) {
                const n = e.createVertexArrayOES();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_deleteVertexArrayOES_7bf4589e63d84df6 = function(e, n) {
                e.deleteVertexArrayOES(n)
            }
            ,
            n.wbg.__wbg_instanceof_Response_fc4327dbfcdf5ced = function(e) {
                let n;
                try {
                    n = e instanceof Response
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_url_8503de97f69da463 = function(e, n) {
                const _ = p(n.url, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = l;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_redirected_b14cd3a1d0cc991e = function(e) {
                return e.redirected
            }
            ,
            n.wbg.__wbg_status_ac85a3142a84caa2 = function(e) {
                return e.status
            }
            ,
            n.wbg.__wbg_ok_e3d8d84e630fd064 = function(e) {
                return e.ok
            }
            ,
            n.wbg.__wbg_statusText_1dd32f6c94d79ef0 = function(e, n) {
                const _ = p(n.statusText, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = l;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbg_arrayBuffer_288fb3538806e85c = function() {
                return T((function(e) {
                    return e.arrayBuffer()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_addColorStop_d2d6fed08fdaa4ca = function() {
                return T((function(e, n, _, t) {
                    e.addColorStop(n, u(_, t))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_instanceof_HtmlCanvasElement_da5f9efa0688cf6d = function(e) {
                let n;
                try {
                    n = e instanceof HTMLCanvasElement
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_width_2931aaedd21f1fff = function(e) {
                return e.width
            }
            ,
            n.wbg.__wbg_setwidth_a667a942dba6656e = function(e, n) {
                e.width = n >>> 0
            }
            ,
            n.wbg.__wbg_height_0d36fbbeb60b0661 = function(e) {
                return e.height
            }
            ,
            n.wbg.__wbg_setheight_a747d440760fe5aa = function(e, n) {
                e.height = n >>> 0
            }
            ,
            n.wbg.__wbg_getContext_7c5944ea807bf5d3 = function() {
                return T((function(e, n, _) {
                    const t = e.getContext(u(n, _));
                    return o(t) ? 0 : I(t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getContext_6d1f155bb5c1096a = function() {
                return T((function(e, n, _, t) {
                    const r = e.getContext(u(n, _), t);
                    return o(r) ? 0 : I(r)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_offsetX_5a58f16f6c3a41b6 = function(e) {
                return e.offsetX
            }
            ,
            n.wbg.__wbg_offsetY_c45b4956f6429a95 = function(e) {
                return e.offsetY
            }
            ,
            n.wbg.__wbg_button_7a095234b69de930 = function(e) {
                return e.button
            }
            ,
            n.wbg.__wbg_width_0b4991f5cf7c640a = function(e) {
                return e.width
            }
            ,
            n.wbg.__wbg_setwidth_15266a5e81f43cf0 = function(e, n) {
                e.width = n >>> 0
            }
            ,
            n.wbg.__wbg_height_8cce73e95fb10fd3 = function(e) {
                return e.height
            }
            ,
            n.wbg.__wbg_setheight_2e9bab573f1775a6 = function(e, n) {
                e.height = n >>> 0
            }
            ,
            n.wbg.__wbg_inverse_c9ee46c728da912b = function(e) {
                return e.inverse()
            }
            ,
            n.wbg.__wbg_width_019b79813c2e80cf = function(e) {
                return e.width
            }
            ,
            n.wbg.__wbg_height_12082005add04bb5 = function(e) {
                return e.height
            }
            ,
            n.wbg.__wbg_pointerId_701aab7b4fb073ff = function(e) {
                return e.pointerId
            }
            ,
            n.wbg.__wbg_deltaY_64823169afb0335d = function(e) {
                return e.deltaY
            }
            ,
            n.wbg.__wbg_deltaMode_1c680147cfdba8a5 = function(e) {
                return e.deltaMode
            }
            ,
            n.wbg.__wbg_instanceof_WebGlRenderingContext_ea632546035eecb1 = function(e) {
                let n;
                try {
                    n = e instanceof WebGLRenderingContext
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_drawingBufferWidth_1a2697e5a3638f03 = function(e) {
                return e.drawingBufferWidth
            }
            ,
            n.wbg.__wbg_drawingBufferHeight_e5d38c5b1cd5bcc5 = function(e) {
                return e.drawingBufferHeight
            }
            ,
            n.wbg.__wbg_bufferData_92a3e0b745b0d726 = function(e, n, _, t) {
                e.bufferData(n >>> 0, _, t >>> 0)
            }
            ,
            n.wbg.__wbg_bufferData_a11a9f65f31e7256 = function(e, n, _, t) {
                e.bufferData(n >>> 0, _, t >>> 0)
            }
            ,
            n.wbg.__wbg_bufferData_ee8e1f8b52130c76 = function(e, n, _, t, r) {
                e.bufferData(n >>> 0, C(_, t), r >>> 0)
            }
            ,
            n.wbg.__wbg_bufferSubData_fca6f1c10273be21 = function(e, n, _, t) {
                e.bufferSubData(n >>> 0, _, t)
            }
            ,
            n.wbg.__wbg_compressedTexSubImage2D_21078c6de0a71aad = function(e, n, _, t, r, b, f, c, a) {
                e.compressedTexSubImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a)
            }
            ,
            n.wbg.__wbg_readPixels_91b0d8854de90477 = function() {
                return T((function(e, n, _, t, r, b, f, c) {
                    e.readPixels(n, _, t, r, b >>> 0, f >>> 0, c)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texImage2D_ba9ab23dac10b236 = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u, o) {
                    e.texImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a >>> 0, 0 === u ? void 0 : C(u, o))
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_texSubImage2D_f1a31f8045b7f831 = function() {
                return T((function(e, n, _, t, r, b, f, c, a, u) {
                    e.texSubImage2D(n >>> 0, _, t, r, b, f, c >>> 0, a >>> 0, u)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_uniform1fv_f9edc98edf0e66b8 = function(e, n, _, t) {
                e.uniform1fv(n, M(_, t))
            }
            ,
            n.wbg.__wbg_uniform2fv_c928f6ba0085b381 = function(e, n, _, t) {
                e.uniform2fv(n, M(_, t))
            }
            ,
            n.wbg.__wbg_uniform2iv_7e5f8e7c2f4d4d6a = function(e, n, _, t) {
                e.uniform2iv(n, B(_, t))
            }
            ,
            n.wbg.__wbg_uniform3fv_1aba437b913c1926 = function(e, n, _, t) {
                e.uniform3fv(n, M(_, t))
            }
            ,
            n.wbg.__wbg_uniform3iv_23751fe4dfcdf539 = function(e, n, _, t) {
                e.uniform3iv(n, B(_, t))
            }
            ,
            n.wbg.__wbg_uniform4fv_7c51c2251d851cb2 = function(e, n, _, t) {
                e.uniform4fv(n, M(_, t))
            }
            ,
            n.wbg.__wbg_uniform4iv_27b49984e9c5d90a = function(e, n, _, t) {
                e.uniform4iv(n, B(_, t))
            }
            ,
            n.wbg.__wbg_uniformMatrix2fv_f8f3ef807f196bf1 = function(e, n, _, t, r) {
                e.uniformMatrix2fv(n, 0 !== _, M(t, r))
            }
            ,
            n.wbg.__wbg_uniformMatrix3fv_341eec37953e50c5 = function(e, n, _, t, r) {
                e.uniformMatrix3fv(n, 0 !== _, M(t, r))
            }
            ,
            n.wbg.__wbg_uniformMatrix4fv_465ab8de531f4f78 = function(e, n, _, t, r) {
                e.uniformMatrix4fv(n, 0 !== _, M(t, r))
            }
            ,
            n.wbg.__wbg_activeTexture_93b4de60af07da9c = function(e, n) {
                e.activeTexture(n >>> 0)
            }
            ,
            n.wbg.__wbg_attachShader_b65b695055670cb5 = function(e, n, _) {
                e.attachShader(n, _)
            }
            ,
            n.wbg.__wbg_bindBuffer_313561e5bc0e533f = function(e, n, _) {
                e.bindBuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindFramebuffer_56bf6536a4ced0ec = function(e, n, _) {
                e.bindFramebuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindRenderbuffer_559c7c6b6676dddd = function(e, n, _) {
                e.bindRenderbuffer(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_bindTexture_9cb5c770d1ba2cca = function(e, n, _) {
                e.bindTexture(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_blendColor_b9006ef6c450acd0 = function(e, n, _, t, r) {
                e.blendColor(n, _, t, r)
            }
            ,
            n.wbg.__wbg_blendEquation_f31ce08020786a09 = function(e, n) {
                e.blendEquation(n >>> 0)
            }
            ,
            n.wbg.__wbg_blendEquationSeparate_7ec5e34f066e44f8 = function(e, n, _) {
                e.blendEquationSeparate(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_blendFunc_fbe9d3a688fe71c3 = function(e, n, _) {
                e.blendFunc(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_blendFuncSeparate_7547ade0a7dfade2 = function(e, n, _, t, r) {
                e.blendFuncSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0)
            }
            ,
            n.wbg.__wbg_clear_2ccea1f65b510c97 = function(e, n) {
                e.clear(n >>> 0)
            }
            ,
            n.wbg.__wbg_clearColor_de587608b28bc7ed = function(e, n, _, t, r) {
                e.clearColor(n, _, t, r)
            }
            ,
            n.wbg.__wbg_colorMask_7cbd7a102954ede9 = function(e, n, _, t, r) {
                e.colorMask(0 !== n, 0 !== _, 0 !== t, 0 !== r)
            }
            ,
            n.wbg.__wbg_compileShader_d88d0a8cd9b72b4d = function(e, n) {
                e.compileShader(n)
            }
            ,
            n.wbg.__wbg_copyTexSubImage2D_3029f8dfe7543ab6 = function(e, n, _, t, r, b, f, c, a) {
                e.copyTexSubImage2D(n >>> 0, _, t, r, b, f, c, a)
            }
            ,
            n.wbg.__wbg_createBuffer_59051f4461e7c5e2 = function(e) {
                const n = e.createBuffer();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createFramebuffer_223c1212ad76affc = function(e) {
                const n = e.createFramebuffer();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createProgram_88dbe21c0b682e1a = function(e) {
                const n = e.createProgram();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createRenderbuffer_bcb61b756ba21490 = function(e) {
                const n = e.createRenderbuffer();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_createShader_9d7d388633caad18 = function(e, n) {
                const _ = e.createShader(n >>> 0);
                return o(_) ? 0 : I(_)
            }
            ,
            n.wbg.__wbg_createTexture_9d0bb4d741b8ad76 = function(e) {
                const n = e.createTexture();
                return o(n) ? 0 : I(n)
            }
            ,
            n.wbg.__wbg_cullFace_4c086dc1d86a19b5 = function(e, n) {
                e.cullFace(n >>> 0)
            }
            ,
            n.wbg.__wbg_deleteBuffer_cdc6b9c73f54aff7 = function(e, n) {
                e.deleteBuffer(n)
            }
            ,
            n.wbg.__wbg_deleteFramebuffer_fcc10cb143c6573d = function(e, n) {
                e.deleteFramebuffer(n)
            }
            ,
            n.wbg.__wbg_deleteProgram_d8d7fc79ba83b256 = function(e, n) {
                e.deleteProgram(n)
            }
            ,
            n.wbg.__wbg_deleteRenderbuffer_edf9e1b4e0a1e005 = function(e, n) {
                e.deleteRenderbuffer(n)
            }
            ,
            n.wbg.__wbg_deleteShader_9a2f85efe5cb3706 = function(e, n) {
                e.deleteShader(n)
            }
            ,
            n.wbg.__wbg_deleteTexture_a883356c5034d482 = function(e, n) {
                e.deleteTexture(n)
            }
            ,
            n.wbg.__wbg_depthFunc_4eda7b4e682acbad = function(e, n) {
                e.depthFunc(n >>> 0)
            }
            ,
            n.wbg.__wbg_depthMask_a3071e13bb087102 = function(e, n) {
                e.depthMask(0 !== n)
            }
            ,
            n.wbg.__wbg_depthRange_ff5298a73fd02650 = function(e, n, _) {
                e.depthRange(n, _)
            }
            ,
            n.wbg.__wbg_disable_5cf2070641fa2ed7 = function(e, n) {
                e.disable(n >>> 0)
            }
            ,
            n.wbg.__wbg_disableVertexAttribArray_8dacd44e21adcaa2 = function(e, n) {
                e.disableVertexAttribArray(n >>> 0)
            }
            ,
            n.wbg.__wbg_drawArrays_d5c7dc2b2376c85a = function(e, n, _, t) {
                e.drawArrays(n >>> 0, _, t)
            }
            ,
            n.wbg.__wbg_drawElements_3316ee0cd1117c2a = function(e, n, _, t, r) {
                e.drawElements(n >>> 0, _, t >>> 0, r)
            }
            ,
            n.wbg.__wbg_enable_8965e69c596f0a94 = function(e, n) {
                e.enable(n >>> 0)
            }
            ,
            n.wbg.__wbg_enableVertexAttribArray_2b0475db43533cf2 = function(e, n) {
                e.enableVertexAttribArray(n >>> 0)
            }
            ,
            n.wbg.__wbg_framebufferRenderbuffer_d80f5381d429bc45 = function(e, n, _, t, r) {
                e.framebufferRenderbuffer(n >>> 0, _ >>> 0, t >>> 0, r)
            }
            ,
            n.wbg.__wbg_framebufferTexture2D_953e69a8bec22fa9 = function(e, n, _, t, r, b) {
                e.framebufferTexture2D(n >>> 0, _ >>> 0, t >>> 0, r, b)
            }
            ,
            n.wbg.__wbg_frontFace_0ba67b9e6365557c = function(e, n) {
                e.frontFace(n >>> 0)
            }
            ,
            n.wbg.__wbg_getActiveUniform_87df972e841afed2 = function(e, n, _) {
                const t = e.getActiveUniform(n, _ >>> 0);
                return o(t) ? 0 : I(t)
            }
            ,
            n.wbg.__wbg_getAttribLocation_a5a98d5272b01c0d = function(e, n, _, t) {
                return e.getAttribLocation(n, u(_, t))
            }
            ,
            n.wbg.__wbg_getExtension_088d115a16ecbd7d = function() {
                return T((function(e, n, _) {
                    const t = e.getExtension(u(n, _));
                    return o(t) ? 0 : I(t)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getParameter_bfab7f0b00c9d7fb = function() {
                return T((function(e, n) {
                    return e.getParameter(n >>> 0)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_getProgramInfoLog_0b7af4ad85fa52a4 = function(e, n, _) {
                const t = n.getProgramInfoLog(_);
                var r = o(t) ? 0 : p(t, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , f = l;
                d()[e / 4 + 1] = f,
                d()[e / 4 + 0] = r
            }
            ,
            n.wbg.__wbg_getProgramParameter_2a3735278367f8bc = function(e, n, _) {
                return e.getProgramParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getShaderInfoLog_979aafa403ffb252 = function(e, n, _) {
                const t = n.getShaderInfoLog(_);
                var r = o(t) ? 0 : p(t, b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , f = l;
                d()[e / 4 + 1] = f,
                d()[e / 4 + 0] = r
            }
            ,
            n.wbg.__wbg_getShaderParameter_e8054f1d9026fb70 = function(e, n, _) {
                return e.getShaderParameter(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_getUniformLocation_688976233799a45a = function(e, n, _, t) {
                const r = e.getUniformLocation(n, u(_, t));
                return o(r) ? 0 : I(r)
            }
            ,
            n.wbg.__wbg_linkProgram_9a2d12d120d99917 = function(e, n) {
                e.linkProgram(n)
            }
            ,
            n.wbg.__wbg_pixelStorei_5ec932ebefd00149 = function(e, n, _) {
                e.pixelStorei(n >>> 0, _)
            }
            ,
            n.wbg.__wbg_polygonOffset_55eea57bba1b49e9 = function(e, n, _) {
                e.polygonOffset(n, _)
            }
            ,
            n.wbg.__wbg_renderbufferStorage_4bcd9ddf1749ce26 = function(e, n, _, t, r) {
                e.renderbufferStorage(n >>> 0, _ >>> 0, t, r)
            }
            ,
            n.wbg.__wbg_scissor_c8ec3b1e053f3756 = function(e, n, _, t, r) {
                e.scissor(n, _, t, r)
            }
            ,
            n.wbg.__wbg_shaderSource_f435f9b74440bb54 = function(e, n, _, t) {
                e.shaderSource(n, u(_, t))
            }
            ,
            n.wbg.__wbg_stencilFunc_11e7ac2d45aa66c7 = function(e, n, _, t) {
                e.stencilFunc(n >>> 0, _, t >>> 0)
            }
            ,
            n.wbg.__wbg_stencilFuncSeparate_0fae0ee7c04a23b2 = function(e, n, _, t, r) {
                e.stencilFuncSeparate(n >>> 0, _ >>> 0, t, r >>> 0)
            }
            ,
            n.wbg.__wbg_stencilMask_79416c29ac1ce3a4 = function(e, n) {
                e.stencilMask(n >>> 0)
            }
            ,
            n.wbg.__wbg_stencilMaskSeparate_19bdb57664d2c34f = function(e, n, _) {
                e.stencilMaskSeparate(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_stencilOp_398dc625213ddfed = function(e, n, _, t) {
                e.stencilOp(n >>> 0, _ >>> 0, t >>> 0)
            }
            ,
            n.wbg.__wbg_stencilOpSeparate_18e0bd316555925f = function(e, n, _, t, r) {
                e.stencilOpSeparate(n >>> 0, _ >>> 0, t >>> 0, r >>> 0)
            }
            ,
            n.wbg.__wbg_texParameteri_1f17358e51eb8069 = function(e, n, _, t) {
                e.texParameteri(n >>> 0, _ >>> 0, t)
            }
            ,
            n.wbg.__wbg_uniform1f_7586c5e17ad254c9 = function(e, n, _) {
                e.uniform1f(n, _)
            }
            ,
            n.wbg.__wbg_uniform1i_9f94ef0ba6b3cc66 = function(e, n, _) {
                e.uniform1i(n, _)
            }
            ,
            n.wbg.__wbg_uniform4f_9aa5afa9177c6ab1 = function(e, n, _, t, r, b) {
                e.uniform4f(n, _, t, r, b)
            }
            ,
            n.wbg.__wbg_useProgram_019eb6df066fabf5 = function(e, n) {
                e.useProgram(n)
            }
            ,
            n.wbg.__wbg_vertexAttribPointer_ca11984ee8843c0a = function(e, n, _, t, r, b, f) {
                e.vertexAttribPointer(n >>> 0, _, t >>> 0, 0 !== r, b, f)
            }
            ,
            n.wbg.__wbg_viewport_6ebef187c89e2616 = function(e, n, _, t, r) {
                e.viewport(n, _, t, r)
            }
            ,
            n.wbg.__wbg_get_44be0491f933a435 = function(e, n) {
                return e[n >>> 0]
            }
            ,
            n.wbg.__wbg_length_fff51ee6522a1a18 = function(e) {
                return e.length
            }
            ,
            n.wbg.__wbg_new_898a68150f225f2e = function() {
                return new Array
            }
            ,
            n.wbg.__wbg_newnoargs_581967eacc0e2604 = function(e, n) {
                return new Function(u(e, n))
            }
            ,
            n.wbg.__wbg_next_526fc47e980da008 = function(e) {
                return e.next
            }
            ,
            n.wbg.__wbg_next_ddb3312ca1c4e32a = function() {
                return T((function(e) {
                    return e.next()
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_done_5c1f01fb660d73b5 = function(e) {
                return e.done
            }
            ,
            n.wbg.__wbg_value_1695675138684bd5 = function(e) {
                return e.value
            }
            ,
            n.wbg.__wbg_iterator_97f0c81209c6c35a = function() {
                return Symbol.iterator
            }
            ,
            n.wbg.__wbg_get_97b561fb56f034b5 = function() {
                return T((function(e, n) {
                    return Reflect.get(e, n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_call_cb65541d95d71282 = function() {
                return T((function(e, n) {
                    return e.call(n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_new_b51585de1b234aff = function() {
                return new Object
            }
            ,
            n.wbg.__wbg_self_1ff1d729e9aae938 = function() {
                return T((function() {
                    return self.self
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_window_5f4faef6c12b79ec = function() {
                return T((function() {
                    return window.window
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_globalThis_1d39714405582d3c = function() {
                return T((function() {
                    return globalThis.globalThis
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_global_651f05c6a0944d1c = function() {
                return T((function() {
                    return _.g.global
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_set_502d29070ea18557 = function(e, n, _) {
                e[n >>> 0] = _
            }
            ,
            n.wbg.__wbg_includes_e846113095d52470 = function(e, n, _) {
                return e.includes(n, _)
            }
            ,
            n.wbg.__wbg_isArray_4c24b343cb13cfb1 = function(e) {
                return Array.isArray(e)
            }
            ,
            n.wbg.__wbg_of_053899a68de3ef48 = function(e) {
                return Array.of(e)
            }
            ,
            n.wbg.__wbg_of_195c986fbfdd6637 = function(e, n) {
                return Array.of(e, n)
            }
            ,
            n.wbg.__wbg_push_ca1c26067ef907ac = function(e, n) {
                return e.push(n)
            }
            ,
            n.wbg.__wbg_instanceof_ArrayBuffer_39ac22089b74fddb = function(e) {
                let n;
                try {
                    n = e instanceof ArrayBuffer
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_values_e80af618f92c8649 = function(e) {
                return e.values()
            }
            ,
            n.wbg.__wbg_new_d258248ed531ff54 = function(e, n) {
                return new Error(u(e, n))
            }
            ,
            n.wbg.__wbg_apply_64be369596a02ae0 = function() {
                return T((function(e, n, _) {
                    return e.apply(n, _)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_call_01734de55d61e11d = function() {
                return T((function(e, n, _) {
                    return e.call(n, _)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_isSafeInteger_bb8e18dd21c97288 = function(e) {
                return Number.isSafeInteger(e)
            }
            ,
            n.wbg.__wbg_getTime_5e2054f832d82ec9 = function(e) {
                return e.getTime()
            }
            ,
            n.wbg.__wbg_getTimezoneOffset_8aee3445f323973e = function(e) {
                return e.getTimezoneOffset()
            }
            ,
            n.wbg.__wbg_new_cd59bfc8881f487b = function(e) {
                return new Date(e)
            }
            ,
            n.wbg.__wbg_new0_c0be7df4b6bd481f = function() {
                return new Date
            }
            ,
            n.wbg.__wbg_instanceof_Object_3daa8298c86298be = function(e) {
                let n;
                try {
                    n = e instanceof Object
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_entries_e51f29c7bba0c054 = function(e) {
                return Object.entries(e)
            }
            ,
            n.wbg.__wbg_fromEntries_46475be008d7104f = function() {
                return T((function(e) {
                    return Object.fromEntries(e)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_is_205d914af04a8faa = function(e, n) {
                return Object.is(e, n)
            }
            ,
            n.wbg.__wbg_new_43f1b47c28813cbd = function(e, n) {
                try {
                    var _ = {
                        a: e,
                        b: n
                    };
                    const t = new Promise(((e,n)=>{
                        const t = _.a;
                        _.a = 0;
                        try {
                            return function(e, n, _, t) {
                                b.closure7732_externref_shim(e, n, _, t)
                            }(t, _.b, e, n)
                        } finally {
                            _.a = t
                        }
                    }
                    ));
                    return t
                } finally {
                    _.a = _.b = 0
                }
            }
            ,
            n.wbg.__wbg_resolve_53698b95aaf7fcf8 = function(e) {
                return Promise.resolve(e)
            }
            ,
            n.wbg.__wbg_then_f7e06ee3c11698eb = function(e, n) {
                return e.then(n)
            }
            ,
            n.wbg.__wbg_then_b2267541e2a73865 = function(e, n, _) {
                return e.then(n, _)
            }
            ,
            n.wbg.__wbg_buffer_085ec1f694018c4f = function(e) {
                return e.buffer
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_828b952f0e692245 = function(e, n, _) {
                return new Int8Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_735ed5ea2ae07fe9 = function(e, n, _) {
                return new Int16Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_9f43b22ab631d1d6 = function(e, n, _) {
                return new Int32Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_6da8e527659b86aa = function(e, n, _) {
                return new Uint8Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_new_8125e318e6245eed = function(e) {
                return new Uint8Array(e)
            }
            ,
            n.wbg.__wbg_set_5cf90238115182c3 = function(e, n, _) {
                e.set(n, _ >>> 0)
            }
            ,
            n.wbg.__wbg_length_72e2208bbc0efc61 = function(e) {
                return e.length
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_31ff1024ef0c63c7 = function(e, n, _) {
                return new Uint16Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_6df0e8c3efd2a5d3 = function(e, n, _) {
                return new Uint32Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_newwithbyteoffsetandlength_69193e31c844b792 = function(e, n, _) {
                return new Float32Array(e,n >>> 0,_ >>> 0)
            }
            ,
            n.wbg.__wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4 = function(e) {
                let n;
                try {
                    n = e instanceof Uint8Array
                } catch {
                    n = !1
                }
                return n
            }
            ,
            n.wbg.__wbg_newwithlength_e5d69174d6984cd7 = function(e) {
                return new Uint8Array(e >>> 0)
            }
            ,
            n.wbg.__wbg_buffer_f5b7059c439f330d = function(e) {
                return e.buffer
            }
            ,
            n.wbg.__wbg_subarray_13db269f57aa838d = function(e, n, _) {
                return e.subarray(n >>> 0, _ >>> 0)
            }
            ,
            n.wbg.__wbg_has_c5fcd020291e56b8 = function() {
                return T((function(e, n) {
                    return Reflect.has(e, n)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_ownKeys_391189872004f097 = function() {
                return T((function(e) {
                    return Reflect.ownKeys(e)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbg_set_092e06b0f9d71865 = function() {
                return T((function(e, n, _) {
                    return Reflect.set(e, n, _)
                }
                ), arguments)
            }
            ,
            n.wbg.__wbindgen_bigint_get_as_i64 = function(e, n) {
                const _ = "bigint" == typeof n ? n : void 0;
                (null !== y && 0 !== y.byteLength || (y = new BigInt64Array(b.memory.buffer)),
                y)[e / 8 + 1] = o(_) ? BigInt(0) : _,
                d()[e / 4 + 0] = !o(_)
            }
            ,
            n.wbg.__wbindgen_debug_string = function(e, n) {
                const _ = p(h(n), b.__wbindgen_malloc, b.__wbindgen_realloc)
                  , t = l;
                d()[e / 4 + 1] = t,
                d()[e / 4 + 0] = _
            }
            ,
            n.wbg.__wbindgen_throw = function(e, n) {
                throw new Error(u(e, n))
            }
            ,
            n.wbg.__wbindgen_memory = function() {
                return b.memory
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1270 = function(e, n, _) {
                return x(e, n, 513, v)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1271 = function(e, n, _) {
                return x(e, n, 513, v)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1272 = function(e, n, _) {
                return x(e, n, 513, S)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1274 = function(e, n, _) {
                return x(e, n, 513, A)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1275 = function(e, n, _) {
                return x(e, n, 513, v)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1276 = function(e, n, _) {
                return x(e, n, 513, v)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper1277 = function(e, n, _) {
                return x(e, n, 513, v)
            }
            ,
            n.wbg.__wbindgen_closure_wrapper10513 = function(e, n, _) {
                return x(e, n, 4295, D)
            }
            ,
            n.wbg.__wbindgen_init_externref_table = function() {
                const e = b.__wbindgen_export_2
                  , n = e.grow(4);
                e.set(0, void 0),
                e.set(n + 0, void 0),
                e.set(n + 1, null),
                e.set(n + 2, !0),
                e.set(n + 3, !1)
            }
            ,
            n
        }
        function V(e, n) {
            return b = e.exports,
            U.__wbindgen_wasm_module = n,
            y = null,
            R = null,
            i = null,
            w = null,
            E = null,
            c = null,
            k = null,
            b.__wbindgen_start(),
            b
        }
        function W(e) {
            if (void 0 !== b)
                return b;
            const n = O();
            return e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e)),
            V(new WebAssembly.Instance(e,n), e)
        }
        async function U(e) {
            if (void 0 !== b)
                return b;
            void 0 === e && (e = new URL(_(899),_.b));
            const n = O();
            ("string" == typeof e || "function" == typeof Request && e instanceof Request || "function" == typeof URL && e instanceof URL) && (e = fetch(e));
            const {instance: t, module: r} = await async function(e, n) {
                if ("function" == typeof Response && e instanceof Response) {
                    if ("function" == typeof WebAssembly.instantiateStreaming)
                        try {
                            return await WebAssembly.instantiateStreaming(e, n)
                        } catch (n) {
                            if ("application/wasm" == e.headers.get("Content-Type"))
                                throw n;
                            console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", n)
                        }
                    const _ = await e.arrayBuffer();
                    return await WebAssembly.instantiate(_, n)
                }
                {
                    const _ = await WebAssembly.instantiate(e, n);
                    return _ instanceof WebAssembly.Instance ? {
                        instance: _,
                        module: e
                    } : _
                }
            }(await e, n);
            return V(t, r)
        }
        const q = U
    }
}]);
//# sourceMappingURL=339.index.js.map
